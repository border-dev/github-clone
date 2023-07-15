'use client';

import { useFileTreeQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { parseFileTree } from '@utils/parsers/parse-file-tree';
import FileExplorerHeader from '../FileExplorerHeader';
import FileExplorerNavigation from '../FileExplorerNavigation';
import FileExplorerViewer from './FileExplorerViewer';

type RepoTreeExplorerProps = {
  owner: string;
  name: string;
  branch: string;
  revision: string;
  path: string;
};

const RepoTreeExplorer = ({
  owner,
  name,
  branch,
  revision,
  path,
}: RepoTreeExplorerProps) => {
  const { data, error, isLoading } = useFileTreeQuery(graphqlClient, {
    owner,
    name,
    path,
    expression: `${revision}:${path}`,
    branch,
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
      <FileExplorerNavigation {...{ owner, name, branch, path }} />
      <div className="mx-4 mb-4"></div>
      <div className="mx-4">
        <FileExplorerHeader summary={explorer.latestCommitSummary} />
        <FileExplorerViewer {...{ owner, name, branch, files }} />
      </div>
    </>
  );
};

export default RepoTreeExplorer;
