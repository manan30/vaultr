import { SessionData, Store } from 'express-session';
import { PrismaSessionStoreOptions } from 'src/types/prisma-session-store';
import { ONE_DAY } from 'src/utils/constants';

import { PrismaService } from '../services/prisma';

export class PrismaSessionStore extends Store {
  private currentIntervalId: NodeJS.Timer;
  constructor(
    private readonly prismaInstance: PrismaService,
    private readonly options: PrismaSessionStoreOptions = {},
  ) {
    super();

    if (!prismaInstance) throw new Error('No prisma instance provided');
    this.startPruneInterval(this.options.pruneInterval ?? ONE_DAY);
  }

  private startPruneInterval(interval: number) {
    if (typeof interval !== 'number') {
      throw new Error('Please provide an interval in ms ');
    }

    if (this.currentIntervalId) {
      clearInterval(this.currentIntervalId);
    }

    this.currentIntervalId = setInterval(
      this.pruneSessions.bind(this),
      interval,
    );
  }

  private async pruneSessions() {
    console.log('Starting session pruning');

    const { count } = await this.prismaInstance.session.deleteMany({
      where: { expiresAt: { lt: new Date(Date.now()) } },
    });

    console.log(`Sessions pruned: ${count}`);
  }

  async get(
    sid: string,
    callback: (err: any, session?: SessionData | null | undefined) => void,
  ) {
    try {
      const session = await this.prismaInstance.session.findFirst({
        where: { AND: [{ sid }, { expiresAt: { gt: new Date(Date.now()) } }] },
      });
      console.log('get', session, callback);

      if (session) callback(null, JSON.parse(session.data));
      else callback(null, null);
    } catch (err) {
      callback(err);
    }
  }

  async set(
    sid: string,
    session: SessionData,
    callback?: ((err?: any) => void) | undefined,
  ) {
    let age;
    if (session.cookie && session.cookie.maxAge) {
      age = session.cookie.maxAge;
    } else {
      age = ONE_DAY;
    }

    const now = Date.now();
    const expiresAt = new Date(now + age).toISOString();
    const data = { sid, data: JSON.stringify(session), expiresAt };

    try {
      await this.prismaInstance.session.create({ data });
      callback?.();
    } catch (err) {
      callback?.(err);
    }
  }

  async destroy(sid: string, callback?: ((err?: any) => void) | undefined) {
    try {
      await this.prismaInstance.session.delete({ where: { sid } });
      callback?.();
    } catch (err) {
      callback?.(err);
    }
  }

  async length(callback: (err: any, length?: number | undefined) => void) {
    try {
      const sessionsCount = await this.prismaInstance.session.count();
      callback(null, sessionsCount);
    } catch (err) {
      callback(err);
    }
  }

  async touch(
    sid: string,
    session: SessionData,
    callback?: (() => void) | undefined,
  ) {
    const data = { expiresAt: '' };

    if (session && session.cookie && session.cookie.expires) {
      data.expiresAt = new Date(session.cookie.expires).toISOString();
    } else {
      const now = new Date().getTime();
      data.expiresAt = new Date(now + ONE_DAY).toISOString();
    }

    try {
      await this.prismaInstance.session.update({
        data,
        where: { sid },
      });
    } finally {
      callback?.();
    }
  }

  async all(
    callback: (
      err: any,
      obj?: SessionData[] | { [sid: string]: SessionData } | null | undefined,
    ) => void,
  ) {
    try {
      const sessions = await this.prismaInstance.session.findMany();
      callback(
        null,
        sessions.map((session) => JSON.parse(session.data)) as SessionData[],
      );
    } catch (err) {
      callback(err);
    }
  }
}
