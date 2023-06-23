import NextAuth from "next-auth/next";

declare module 'next-auth' {
  interface Profile {
    [key: string]: unknown;
  }
}
