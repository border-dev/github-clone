'use client';

import { useFileExplorerQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import FileExplorerHeader from './FileExplorerHeader';
import FileExplorerNavigation from './FileExplorerNavigation';
import FileExplorerViewer from './FileExplorerViewer';
import { parseFileExplorer } from './parse-file-explorer';
import { useMemo } from 'react';

type RepoHomeFileExplorerProps = {
  owner: string;
  name: string;
  branch: string;
  revision: string;
  path: string;
};

const RepoHomeFileExplorer = ({
  owner,
  name,
  branch,
  revision,
  path,
}: RepoHomeFileExplorerProps) => {
  const getDate = useMemo(() => new Date().toISOString(), []);
  const { data, error, isLoading } = useFileExplorerQuery(graphqlClient, {
    owner,
    name,
    expression: `${revision}:${path}`,
    branch,
    date: getDate,
  });

  if (isLoading) {
    <div>Loading files...</div>;
  }

  if (error || !data) {
    return <div className="text-sm">File viewer failed to load</div>;
  }

  const { files, ...explorer } = parseFileExplorer(data);

  return (
    <>
      <FileExplorerNavigation owner={owner} name={name} />
      <div className="Box mb-4">
        <FileExplorerHeader
          summary={explorer.latestCommitSummary}
          branch={branch}
        />
        <FileExplorerViewer {...{ owner, name, branch, files }} />
      </div>
    </>
  );
};

export default RepoHomeFileExplorer;
