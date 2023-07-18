import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

type ActionHeaderProps = {
  basePath: string;
  branch: string;
  path: string;
  byteSize: number;
  lines: number;
  /* Enable preview mode if file is markdown */
  isPreview: boolean;
  isTextCopied: boolean;
  /* Toggle preview mode if file is markdown */
  togglePreview: Dispatch<SetStateAction<boolean>>;
  onCopy: React.MouseEventHandler<HTMLButtonElement>;
};

const ActionHeader = ({
  basePath,
  branch,
  path,
  byteSize,
  lines,
  isPreview,
  isTextCopied,
  togglePreview,
  onCopy,
}: ActionHeaderProps) => {
  const pathName = usePathname();
  const filePath = `${basePath}/blob/${branch}/${path}`;
  const blamePath = `${basePath}/blame/${branch}/${path}`;
  const rawPath = `${basePath}/raw/${branch}/${path}`;

  return (
    <div className="sticky top-0 z-[1] bg-[#0d1117]">
      <div className="absolute flex w-full flex-col">
        <div className="flex shrink flex-grow basis-[0%] items-center justify-between rounded-t-md border border-[#30363d] bg-[#161b22] py-2 pl-2">
          <h2 className="sr-only">File meta data and controls</h2>
          <div className="flex min-w-0 items-center gap-2">
            <ul className="m-0 inline-flex h-7 rounded-md bg-[#6e76811a] p-0 text-sm">
              {filePath === pathName && (
                <li className="file-action-item relative my-[1px] ml-[-1px] mr-[1px] block grow">
                  <button
                    className="file-action-left-btn"
                    onClick={() => togglePreview(true)}
                  >
                    <span
                      className={classNames(
                        'flex h-full items-center justify-center rounded-md border px-3',
                        filePath === pathName && isPreview
                          ? 'border-[#6e7681] bg-[#0d1117]'
                          : 'border-transparent bg-transparent',
                      )}
                    >
                      <div>Preview</div>
                    </span>
                  </button>
                </li>
              )}
              <li className="file-action-item relative my-[-1px] mr-[1px] block grow">
                <button
                  className="file-action-left-btn"
                  onClick={() => togglePreview(false)}
                >
                  <span
                    className={classNames(
                      'flex h-full items-center justify-center rounded-md border px-3',
                      filePath === pathName && !isPreview
                        ? 'border-[#6e7681] bg-[#0d1117]'
                        : 'border-transparent bg-transparent',
                    )}
                  >
                    <div>Code</div>
                  </span>
                </button>
              </li>
              <li className="relative my-[-1px] mr-[1px] block grow">
                <Link className="file-action-left-btn" href={blamePath}>
                  <span
                    className={classNames(
                      'flex h-full items-center justify-center rounded-md border px-3 hover:bg-[#30363d]',
                      blamePath === pathName
                        ? 'border-[#6e7681] bg-[#0d1117]'
                        : 'border-transparent bg-transparent',
                    )}
                  >
                    <div>Blame</div>
                  </span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center">
              <div className="m-w-0 flex-auto pr-4 text-xs text-[#7d8590]">
                <div
                  className="inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap align-top"
                  title={`${byteSize} Bytes`}
                >
                  <span>
                    {lines} lines · {byteSize} Bytes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-2 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="isolate inline-flex align-middle">
                <Link
                  className="file-action-right-btn relative inline-flex h-7 gap-1 rounded-none rounded-bl-md rounded-tl-md px-2 text-xs"
                  href={rawPath}
                >
                  <span className="grid-template-areas-text-trailing grid shrink-0 flex-grow basis-auto grid-cols-[min-content_minmax(0px,auto)_min-content] content-center items-center justify-center">
                    <span className="col-start-[text] col-end-[text] row-start-[text] row-end-[text] whitespace-nowrap leading-[calc(1.66667)]">
                      Raw
                    </span>
                  </span>
                </Link>
                <span className="tooltip">
                  <span className="tooltiptext text-xs">
                    {isTextCopied ? 'Copied!' : 'Copy raw file'}
                  </span>
                  <button
                    onClick={onCopy}
                    className="file-action-right-btn relative inline-grid h-7 w-7 place-content-center gap-1 rounded-none text-xs"
                  >
                    <Icon className="icon" name="copy" size={16} />
                  </button>
                </span>
                <span className="relative rounded-br-md rounded-tr-md">
                  <button className="file-action-right-btn inline-grid h-7 w-7 place-content-center gap-1 rounded-bl-none rounded-tl-none text-xs">
                    <Icon className="icon" name="download" size={16} />
                  </button>
                </span>
              </div>
              <div className="isolate inline-flex align-middle">
                <span className="relative rounded-bl-md rounded-tl-md">
                  <Link
                    className="file-action-right-btn inline-grid h-7 w-7 place-content-center gap-1 rounded-br-none rounded-tr-none text-xs"
                    href="#"
                  >
                    <Icon className="icon" name="pencil" size={16} />
                  </Link>
                </span>
                <button className="file-action-right-btn relative inline-grid h-7 w-7 place-content-center gap-1 rounded-none rounded-br-md rounded-tr-md text-sm">
                  <Icon name="triangle-down" size={16} />
                </button>
              </div>
            </div>
            <button className="util-btn-outline mr-2 inline-grid h-7 w-7 place-content-center gap-1 text-xs text-[#7d8590]">
              <Icon className="icon" name="list-unordered" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionHeader;
