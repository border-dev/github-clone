import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { ExplorerLineItem } from '@utils/parsers/types/FileExplorer';
import FileExplorerLineItem from './FileExplorerLineItem';

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
}: FileExplorerViewerProps) => (
  <div className="flex flex-col gap-4">
    <h2 className="sr-only">Folders and Files</h2>
    <table className="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-md border border-[#30363d]">
      <thead className="h-10">
        <tr className="h-10 p-4 text-left text-xs text-[#7d8590]">
          <th className="hidden w-full bg-[#161b22] pl-4">
            <span className="font-semibold">Name</span>
          </th>
          <th className="w-2/5 bg-[#161b22] pl-4">
            <span className="font-semibold">Name</span>
          </th>
          <th className="bg-[#161b22] pl-4">
            <div
              className="inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap align-top"
              title="Last commit message"
            >
              <span className="font-semibold">Last commit message</span>
            </div>
          </th>
          <th className="w-[136px] bg-[#161b22] pr-4 text-right">
            <span className="font-semibold">Last commit date</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-10 text-sm">
          <td
            className="w-full border-t border-[#30363d] pl-4 pr-4 text-left text-sm"
            colSpan={3}
          >
            <h3 className="sr-only">parent directory</h3>
            <Link
              className="cursor-pointer font-semibold text-[#7d8590]"
              href={`/${owner}/${name}/tree/${branch}`}
            >
              <div className="flex w-4 items-center text-center tracking-[2px]">
                <Icon
                  className="icon mr-[10px] fill-[#7d8590]"
                  name="directory"
                  size={16}
                />
                ..
              </div>
            </Link>
          </td>
        </tr>
        {files.map((file) => (
          <FileExplorerLineItem
            key={file.path}
            {...{ owner, branch, name, file }}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default FileExplorerViewer;
