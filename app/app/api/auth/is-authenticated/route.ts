import { AxiosHeaders } from 'axios';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { isAuthenticated } from '..';

export async function GET(request: Request) {
  try {
    const response = await isAuthenticated({
      headers: Object.fromEntries(headers())
    });

    return NextResponse.json(response.data);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
