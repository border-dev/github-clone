import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';

type ActionHeaderProps = { byteSize: number; lines: number };

const ActionHeader = ({ byteSize, lines }: ActionHeaderProps) => (
  <div className="sticky top-0 z-[1] bg-[#0d1117]">
    <div className="absolute flex w-full flex-col">
      <div className="flex shrink flex-grow basis-[0%] items-center justify-between rounded-t-md border border-[#30363d] bg-[#161b22] py-2 pl-2">
        <h2 className="sr-only">File meta data and controls</h2>
        <div className="flex min-w-0 items-center gap-2">
          <ul className="m-0 inline-flex h-7 rounded-md bg-[#6e76811a] p-0 text-sm">
            <li className="file-action-item relative my-[1px] ml-[-1px] mr-[1px] block grow">
              <button className="file-preview-btn">
                <span className="flex h-full items-center justify-center rounded-md border border-[#6e7681] bg-[#0d1117] px-3">
                  <div>Preview</div>
                </span>
              </button>
            </li>
            <li className="file-action-padded-item relative my-[-1px] mr-[1px] block grow">
              <button className="file-preview-padded-btn">
                <span className="flex h-full items-center justify-center rounded-md border border-transparent bg-transparent px-3">
                  <div>Code</div>
                </span>
              </button>
            </li>
            <li className="relative my-[-1px] mr-[1px] block grow">
              <button className="file-preview-padded-btn">
                <span className="flex h-full items-center justify-center rounded-md border border-transparent bg-transparent px-3">
                  <div>Blame</div>
                </span>
              </button>
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
                className="file-action-btn relative inline-flex h-7 gap-1 rounded-none rounded-bl-md rounded-tl-md px-2 text-xs"
                href="#"
              >
                <span className="grid-template-areas-text-trailing grid shrink-0 flex-grow basis-auto grid-cols-[min-content_minmax(0px,auto)_min-content] content-center items-center justify-center">
                  <span className="col-start-[text] col-end-[text] row-start-[text] row-end-[text] whitespace-nowrap leading-[calc(1.66667)]">
                    Raw
                  </span>
                </span>
              </Link>
              <button className="file-action-btn relative inline-grid h-7 w-7 place-content-center gap-1 rounded-none text-xs">
                <Icon className="icon" name="copy" size={16} />
              </button>
              <span className="relative rounded-br-md rounded-tr-md">
                <button className="file-action-btn inline-grid h-7 w-7 place-content-center gap-1 rounded-bl-none rounded-tl-none text-xs">
                  <Icon className="icon" name="download" size={16} />
                </button>
              </span>
            </div>
            <div className="isolate inline-flex align-middle">
              <span className="relative rounded-bl-md rounded-tl-md">
                <Link
                  className="file-action-btn inline-grid h-7 w-7 place-content-center gap-1 rounded-br-none rounded-tr-none text-xs"
                  href="#"
                >
                  <Icon className="icon" name="pencil" size={16} />
                </Link>
              </span>
              <button className="file-action-btn relative inline-grid h-7 w-7 place-content-center gap-1 rounded-none rounded-br-md rounded-tr-md text-sm">
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

export default ActionHeader;
