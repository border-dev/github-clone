'use client';

import { useRepoFileQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { parseFileViewer } from '@utils/parsers/parse-file-viewer';
import { useMemo } from 'react';
import FileExplorerHeader from '../FileExplorerHeader';
import FileExplorerNavigation from '../FileExplorerNavigation';
import File from './File';

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
  const getDate = useMemo(() => new Date().toISOString(), []);
  const decodedPath = decodeURI(path);
  const { data, error, isLoading } = useRepoFileQuery(graphqlClient, {
    owner,
    name,
    path: decodedPath,
    expression: `${revision}:${decodedPath}`,
    branch,
  });

  if (isLoading) {
    <div>Loading files...</div>;
  }

  if (error || !data) {
    return <div className="text-sm">File viewer failed to load</div>;
  }

  const { file, ...explorer } = parseFileViewer(decodedPath, data);

  return (
    <>
      <FileExplorerNavigation {...{ owner, name, branch, path: decodedPath }} />
      <div className="mx-4 mb-4"></div>
      <div className="mx-4">
        <FileExplorerHeader summary={explorer.latestCommitSummary} />
        <File file={file} />
      </div>
    </>
  );
};

export default RepoFileExplorer;
