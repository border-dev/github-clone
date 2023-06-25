'use client';

import { useUserTopReposQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import Image from 'next/image';
import Link from '../Link';
import { parseTopReposQuery } from './parse-top-repos-query';

const UserTopRepos = () => {
  const { data, error, isLoading } = useUserTopReposQuery(graphqlClient);

  if (isLoading) {
    <div>Loading repos</div>;
  }

  if (error || !data) {
    return <div className="text-sm">Failed to load your repos.</div>;
  }

  const repos = parseTopReposQuery(data);

  return (
    <ul>
      {repos.map(({ id, name, owner, ownerAvatar }) => (
        <li key={id}>
          <div className="mt-2 flex h-[21px] w-full">
            <Link
              href={`/${owner}/${name}`}
              className="mr-2 flex items-center bg-transparent text-[#2f81f7]"
            >
              <Image
                className="inline-block shrink-0 overflow-hidden rounded-[3px] bg-transparent align-middle leading-none"
                src={ownerAvatar}
                alt={`${owner} avatar`}
                width={16}
                height={16}
              />
            </Link>
            <div className="flex items-center break-words">
              <Link
                href={`/${owner}/${name}`}
                className="bg-transparent text-sm leading-[0] text-[#e6edf3]"
              >
                {owner}/{name}
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserTopRepos;
