import RepoHomeFileExplorerHeader from '@components/modules/RepoHomeFileExplorerHeader';
import RepoHomeFileExplorerViewer from '@components/modules/RepoHomeFileExplorerViewer';
import { useFileExplorerQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { parseFileExplorer } from './parse-file-explorer';

type RepoHomePageFileExplorerProps = {
  owner: string;
  name: string;
  branch: string;
  path: string;
};

const RepoHomePageFileExplorer = ({
  owner,
  name,
  branch,
  path,
}: RepoHomePageFileExplorerProps) => {
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
      <RepoHomeFileExplorerViewer {...{ owner, name, branch, files }} />
    </div>
  );
};

export default RepoHomePageFileExplorer;
