import type { JWT } from 'next-auth/jwt';

export const REFRESH_TOKEN_ERROR = 'RefreshAccessTokenError';

export const calculateTokenExpirationDate = (expiresIn: number) =>
  Date.now() + expiresIn;

export async function refreshAccessToken(token: JWT) {
  try {
    if (typeof token.refresh_token !== 'string') {
      throw new Error('Invalid refresh token');
    }

    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID ?? '',
      client_secret: process.env.GITHUB_CLIENT_SECRET ?? '',
      grant_type: 'refresh_token',
      refresh_token: token.refresh_token,
    });

    const response = await fetch(
      `https://github.com/login/oauth/access_token?${params.toString()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    const refreshedToken = await response.json();

    if (!response.ok || refreshedToken.error) {
      throw new Error('Failed to get new token');
    }

    return {
      ...token,
      access_token: refreshedToken.access_token,
      expires:
        typeof refreshedToken.expires_in === 'number'
          ? calculateTokenExpirationDate(refreshedToken.expires_in)
          : undefined,
      refresh_token: refreshedToken.refresh_token,
    };
  } catch (error) {
    return {
      ...token,
      error: REFRESH_TOKEN_ERROR,
    };
  }
}
