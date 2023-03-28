import { AxiosHeaders } from 'axios';
import axios from 'axios';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { createNewUser } from '..';
import type { CreateUserPayload } from '../types';

export async function POST(request: Request) {
  try {
    const headersList = headers();
    const body = (await request.json()) as CreateUserPayload;

    const response = await createNewUser(body, {
      headers: headersList as unknown as AxiosHeaders
    });

    return NextResponse.json(response.data, {
      headers: response.headers as HeadersInit
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.response?.data.message },
        { status: error.response?.data.statusCode }
      );
    }
    return NextResponse.json({ error }, { status: 500 });
  }
}
