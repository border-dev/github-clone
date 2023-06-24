import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;
const GRAPHQL_ENDPOINT = process.env.GITHUB_GRAPHQL_ENDPOINT;

/**
 * Client proxy endpoint to the GitHub GraphQL API
 */
export async function POST(req: NextRequest) {
  if (!GRAPHQL_ENDPOINT) {
    return new NextResponse(
      JSON.stringify({ message: 'Invalid server configuration' }),
      { status: 500 },
    );
  }

  const token = await getToken({ req, secret });

  if (token === null) {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
    });
  }

  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(req.body),
    });

    const data = await res.json();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    const error =
      err instanceof Error
        ? { message: err.message }
        : { message: 'Server error' };

    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
