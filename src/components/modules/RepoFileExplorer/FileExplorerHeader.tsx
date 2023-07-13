import Link from '@components/atoms/Link';
import { getPastDate } from '@utils/date-formatter';
import Image from 'next/image';
import { CommitSummary } from '../RepoHomeFileExplorer/parse-file-explorer';

type FileExplorerHeaderProps = {
  summary: Partial<CommitSummary>;
};

const FileExplorerHeader = ({ summary }: FileExplorerHeaderProps) => (
  <div className="mb-4 flex flex-col rounded-md border border-[#30363d]">
    <div className="mind-w-[273px] flex flex-row items-center justify-between gap-2 py-2 pl-4 pr-2">
      <h2 className="sr-only">Latest commit</h2>
      <div className="flex w-max min-w-0 items-center gap-2 text-sm">
        <div className="flex flex-row items-center">
          <Link
            className="text-[#2f81f7] hover:underline"
            href={`/${summary.commitAuthor}`}
          >
            <Image
              className="mr-2 inline-block overflow-hidden rounded-[50%] align-middle leading-[1] shadow-[rgba(240,246,252,0.1)_0px_0px_0px_1px]"
              src={summary.commitAuthorAvatarUrl}
              alt={summary.commitAuthor ?? ''}
              width={20}
              height={20}
            />
          </Link>
          <span className="relative">
            <Link
              className="whitespace-nowrap font-semibold text-[#e6edf3] hover:underline"
              href={`/${summary.commitAuthor}`}
            >
              {summary.commitAuthor}
            </Link>
          </span>
        </div>
        <div className="flex min-w-0 items-center gap-2">
          <div className="inline-flex min-w-0 max-w-full items-center text-sm">
            <span className="min-w-[1ch] max-w-fit overflow-hidden text-ellipsis whitespace-nowrap">
              <Link
                className="text-[#7d8590] hover:text-[#2f81f7] hover:underline"
                href="#"
              >
                {summary.lastCommitMessage}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center">
          <span className="flex flex-nowrap text-xs text-[#7d8590]">
            <Link
              className="text-[#7d8590] hover:text-[#2f81f7] hover:underline"
              href="#"
            >
              {summary.shortCommitHash}
            </Link>
            &nbsp;·&nbsp;
            <span className="whitespace-nowrap">
              {getPastDate(summary.lastCommittedDate)}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default FileExplorerHeader;
