import { ExplorerLineItemCommitHistory } from '@utils/parsers/types/FileExplorer';
import FileExplorerLineItem from './FileExplorerLineItem';

type FileExplorerViewerProps = {
  owner: string;
  name: string;
  branch: string;
  files: ExplorerLineItemCommitHistory[];
};

const FileExplorerViewer = ({
  owner,
  name,
  branch,
  files,
}: FileExplorerViewerProps) => (
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
      {files.map((file) => (
        <FileExplorerLineItem
          key={file.path}
          {...{ owner, branch, name, file }}
        />
      ))}
    </div>
  </>
);

export default FileExplorerViewer;
