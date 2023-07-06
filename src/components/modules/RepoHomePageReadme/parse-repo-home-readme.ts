import { Blob, RepoHomeReadMeQuery } from '@lib/generated/graphql';

export const parseRepoReadmeQuery = (data: RepoHomeReadMeQuery) => {
  const readme = data.repository?.readme as Blob;
  return readme?.text ?? undefined;
};
