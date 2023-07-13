'use client';

import { useFileTreeQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import RepoFileViewerPageNavigation from '../RepoFileViewerPageNavigation';
import FileExplorerHeader from './FileExplorerHeader';
import FileExplorerViewer from './FileExplorerViewer';
import { parseFileTree } from './parse-file-tree';

type RepoFileExplorerProps = {
  owner: string;
  name: string;
  branch: string;
  revision: string;
  path: string;
};

const RepoFileExplorer = ({
  owner,
  name,
  branch,
  revision,
  path,
}: RepoFileExplorerProps) => {
  const { data, error, isLoading } = useFileTreeQuery(graphqlClient, {
    owner,
    name,
    path,
    expression: `${revision}:${path}`,
  });

  if (isLoading) {
    <div>Loading files...</div>;
  }

  if (error || !data) {
    return <div className="text-sm">File viewer failed to load</div>;
  }

  const { files, ...explorer } = parseFileTree(data);

  return (
    <>
      <RepoFileViewerPageNavigation {...{ owner, name, branch, path }} />
      <div className="mx-4 mb-4"></div>
      <div className="mx-4">
        <FileExplorerHeader summary={explorer.latestCommitSummary} />
        <FileExplorerViewer />
      </div>
    </>
  );
};

export default RepoFileExplorer;
