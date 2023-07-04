'use client';

import FileExplorerNavigation from '@components/modules/FileExplorerNavigation';
import RepoHomePageFileExplorer from '@components/modules/RepoHomePageFileExplorer';
import { parseRepo } from '@components/modules/RepoHomePageFileExplorer/parse-repo';
import RepoPageHeader from '@components/modules/RepoPageHeader';
import { useRepoPageQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';

type RepoPageProps = {
  owner: string;
  name: string;
  branch?: string;
  path?: string;
};

const RepoPage = ({
  owner,
  name,
  branch: branchPath,
  path: fullPath,
}: RepoPageProps) => {
  const { data, error, isLoading } = useRepoPageQuery(graphqlClient, {
    owner,
    name,
  });

  if (isLoading) {
    <div>Loading repos...</div>;
  }

  if (error || !data) {
    return <div className="text-sm">Failed to load your repos.</div>;
  }

  const path = Array.isArray(fullPath)
    ? fullPath.join('/')
    : (fullPath as string);
  const branch = typeof branchPath === 'string' ? branchPath : 'main';
  const repo = parseRepo(data);

  return (
    <div>
      <RepoPageHeader repo={repo} owner={owner} name={name} />
      <div>
        {/* Repo container */}
        <h1 className="sr-only">{name}</h1>
        <div className="clearfix m-auto mt-6 max-w-7xl px-4 md:px-6 lg:px-8">
          <div>
            <div className="m-w-0 grid grid-cols-[minmax(0,_calc(100%_-_296px_-_24px))_0_auto]">
              <div className="col-span-1 col-end-auto min-w-0">
                {/* File navigation */}
                <FileExplorerNavigation owner={owner} name={name} />
                <RepoHomePageFileExplorer {...{ owner, name, branch, path }} />
                {/* README section */}
                <div></div>
              </div>
              <div className="col-span-2 col-start-2 w-[296px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
