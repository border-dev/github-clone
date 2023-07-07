import Hydrate from '@components/organisms/Hydrate';
import RepoHome from '@components/organisms/RepoHome';
import { useRepoPageQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { QueryClient, dehydrate } from '@tanstack/react-query';

type RepoPageProps = {
  params: {
    /* Owner of the repo. Could be user or org */
    owner: string;
    /* Repo name */
    name: string;
    /* Branch path */
    branch?: string;
    /* End segment from full path */
    path?: string;
  };
};

export default async function RepoPageHydration({ params }: RepoPageProps) {
  const { branch, path = '', ...variables } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useRepoPageQuery.getKey(variables),
    useRepoPageQuery.fetcher(graphqlClient, variables),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <RepoHome {...{ ...variables, branch, path }} />
    </Hydrate>
  );
}
