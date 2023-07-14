import RepoTreeViewer from '@components/organisms/RepoTreeViewer';
import { useRepoPageQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { Hydrate, QueryClient, dehydrate } from '@tanstack/react-query';

type RepoTreeBranchPageProps = {
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

export default async function RepoTreeBranchPageHydration({
  params,
}: RepoTreeBranchPageProps) {
  const { branch, path = '', ...variables } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useRepoPageQuery.getKey(variables),
    useRepoPageQuery.fetcher(graphqlClient, variables),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <RepoTreeViewer {...{ ...variables, branch, path }} />
    </Hydrate>
  );
}
