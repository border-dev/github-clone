import RepoHomeFileExplorerHeader from '@components/modules/RepoHomeFileExlporerHeader';
import RepoHomeFileExplorer from '@components/modules/RepoHomeFileExplorer';
import { useFileExplorerQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { parseFileExplorer } from './parse-file-explorer';

type RepoPageFileExplorerProps = {
  owner: string;
  name: string;
  branch: string;
  path: string;
};

const RepoPageFileExplorer = ({
  owner,
  name,
  branch,
  path,
}: RepoPageFileExplorerProps) => {
  const { data, error, isLoading } = useFileExplorerQuery(graphqlClient, {
    owner,
    name,
    // expression: `${branch}:${path}`,
    expression: 'HEAD:',
  });

  if (isLoading) {
    <div>Loading files...</div>;
  }

  if (error || !data) {
    return <div className="text-sm">File viewer failed to load</div>;
  }

  const { files, ...explorer } = parseFileExplorer(data);

  return (
    <div className="Box mb-4">
      <RepoHomeFileExplorerHeader {...{ ...explorer, branch }} />
      <RepoHomeFileExplorer {...{ owner, name, branch, files }} />
    </div>
  );
};

export default RepoPageFileExplorer;
