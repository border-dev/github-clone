import { calculateTokenExpirationDate, refreshAccessToken } from '@lib/jwt';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user && account && profile) {
        const expiresIn = token.exp as number;

        if (expiresIn) {
          token.expires = calculateTokenExpirationDate(expiresIn);
        }

        token.username = profile.login; // save the github username
        token.access_token = account.access_token as string;
        token.refresh_token = account.refresh_token;
      }

      // Fetch an updated access token if current one expires
      if (
        token.refresh_token &&
        typeof token.expires === 'number' &&
        Date.now() >= token.expires
      ) {
        return await refreshAccessToken(token);
      }

      return token;
    },
  },
});

export { handler as GET, handler as POST };
