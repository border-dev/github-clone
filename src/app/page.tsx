'use client';

import { useSession } from 'next-auth/react';

export default function Home() {
  useSession({
    required: true,
  });
  return <div>Home Page</div>;
}
