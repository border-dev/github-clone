import FileExplorerLineItem from '../FileExplorerLineItem';
import { ExplorerLineItem } from './parse-file-explorer';

type FileExplorerViewerProps = {
  owner: string;
  name: string;
  branch: string;
  files: ExplorerLineItem[];
};

const FileExplorerViewer = ({
  owner,
  name,
  branch,
  files,
}: FileExplorerViewerProps) => {
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
          <FileExplorerLineItem
            key={path}
            {...{ owner, branch, name, type, fileName, path }}
          />
        ))}
      </div>
    </>
  );
};

export default FileExplorerViewer;
