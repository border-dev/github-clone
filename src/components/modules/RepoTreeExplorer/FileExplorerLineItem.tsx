import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { ExplorerLineItem } from '@utils/parsers/types/FileExplorer';

type FileExplorerLineItemProps = {
  owner: string;
  name: string;
  branch: string;
  file: ExplorerLineItem;
};

const FileExplorerLineItem = ({
  owner,
  name,
  branch,
  file,
}: FileExplorerLineItemProps) => {
  const { type, name: fileName, path } = file;

  return (
    <tr key={path} className="h-10 text-sm">
      <td colSpan={1}>
        <div className="directory-filename-column">
          {type === 'tree' ? (
            <Icon
              aria-label="Directory"
              name="directory"
              className="icon text-[#7d8590]"
              size={16}
            />
          ) : (
            <Icon
              aria-label="File"
              name="file"
              className="icon text-[#7d8590]"
              size={16}
            />
          )}
          <div className="overflow-hidden">
            <h3 className="text-sm">
              <div className="inline-block max-w-full overflow-hidden text-ellipsis whitespace-pre align-text-top">
                <Link href={`/${owner}/${name}/${type}/${branch}/${path}`}>
                  {fileName}
                </Link>
              </div>
            </h3>
            <div className="sr-only">
              {type === 'tree' ? '(Directory)' : '(File)'}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
          <Link
            className="text-[#7d8590] hover:text-[#2f81f7] hover:underline"
            href="#"
          >
            [commit message]
          </Link>
        </div>
      </td>
      <td>
        <div className="pr-4 text-right text-[#7d8590]">
          <span className="whitespace-nowrap">ISO date here</span>
        </div>
      </td>
    </tr>
  );
};

export default FileExplorerLineItem;
