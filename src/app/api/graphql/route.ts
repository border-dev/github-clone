import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;
const GRAPHQL_ENDPOINT = process.env.GITHUB_GRAPHQL_ENDPOINT;

/**
 * Client proxy endpoint to the GitHub GraphQL API
 */
export async function POST(req: NextRequest) {
  if (!GRAPHQL_ENDPOINT) {
    return new Response(
      JSON.stringify({ message: 'Invalid server configuration' }),
      { status: 500 },
    );
  }

  const token = await getToken({ req, secret });

  if (token === null) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
    });
  }

  try {
    const body = await req.json(); // reads req.body using Web API per Next 13
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        // necessary for graphql-request to not choke
        // on the stringified object
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    const error =
      err instanceof Error
        ? { message: err.message }
        : { message: 'Server error' };

    return new Response(JSON.stringify(error), { status: 500 });
  }
}
