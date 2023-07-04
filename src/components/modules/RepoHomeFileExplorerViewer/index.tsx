import { ExplorerLineItem } from '@components/modules/RepoHomePageFileExplorer/parse-file-explorer';
import RepoHomeFileExplorerLineItem from '../RepoHomeFileExplorerLineItem';

type RepoHomeFileExplorerViewerProps = {
  owner: string;
  name: string;
  branch: string;
  files: ExplorerLineItem[];
};

const RepoHomeFileExplorerViewer = ({
  owner,
  name,
  branch,
  files,
}: RepoHomeFileExplorerViewerProps) => {
  return (
    <>
      <h2 className="sr-only">Files</h2>
      <div role="grid" className="text-sm md:block">
        <div className="sr-only" role="row">
          <div role="columnheader">Type</div>
          <div role="columnheader">Name</div>
          <div role="columnheader" className="none md:block">
            Latest commit message
          </div>
          <div role="columnheader">Commit time</div>
        </div>
        {files.map(({ type, name: fileName, path }) => (
          <RepoHomeFileExplorerLineItem
            key={path}
            {...{ owner, branch, name, type, fileName, path }}
          />
        ))}
      </div>
    </>
  );
};

export default RepoHomeFileExplorerViewer;
