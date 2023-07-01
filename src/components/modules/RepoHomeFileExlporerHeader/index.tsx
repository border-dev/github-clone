import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import Image from 'next/image';
import { getPastDate } from '../../../utils/date-formatter';

type RepoHomeFileExplorerHeaderProps = {
  commitAuthor: string;
  commitAuthorAvatarUrl: string;
  lastCommitMessage: string;
  shortCommitHash: string;
  lastCommittedDate: string;
  totalCommits: number;
  branch: string;
};

const RepoHomeFileExplorerHeader = ({
  commitAuthor,
  commitAuthorAvatarUrl,
  lastCommitMessage,
  shortCommitHash,
  lastCommittedDate,
  totalCommits,
  branch,
}: RepoHomeFileExplorerHeaderProps) => {
  return (
    <div className="Box-header relative">
      <h2 className="sr-only">Latest commit</h2>
      <div className="flex flex-wrap items-center rounded-tl-md rounded-tr-md">
        <div className="m-[calc(4px*-1)] shrink-0">
          <div className="relative h-6 min-w-[24px]">
            <div className="AvatarStack-body absolute flex rounded-[100px] [&:not(hover)]:bg-transparent">
              <Link
                href="#"
                className="avatar z-[1] h-6 w-6 rounded-[50%] border-r-0"
              >
                <Image
                  className="rounded-[50%]"
                  src={commitAuthorAvatarUrl}
                  alt={commitAuthor}
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-4 min-w-0 flex-1 items-center text-sm">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[#7d8590]">
            <Link
              className="whitespace-nowrap font-semibold text-[#e6edf3]"
              href="#"
            >
              {commitAuthor}
            </Link>{' '}
            <span className="hidden sm:inline">
              <Link className="text-[#e6edf3]" href="#">
                {lastCommitMessage}
              </Link>
            </span>
          </div>
        </div>
        <div className="ml-4 flex items-baseline justify-end  text-xs">
          <Link className="ml-2 hidden text-[#7d8590] lg:inline" href="#">
            {shortCommitHash}
          </Link>
          <Link className="ml-2 hidden text-[#7d8590] lg:inline" href="#">
            {getPastDate(lastCommittedDate)}
          </Link>
        </div>
        <div className="shrink-0">
          <h2 className="sr-only">Git stats</h2>
          <ul className="flex text-sm">
            <li className="ml-0 md:ml-4">
              <Link
                className="whitespace-nowrap text-[#e6edf3] md:m-0 md:p-0"
                href="#"
              >
                <Icon name="history" className="icon" size={16} />{' '}
                <span className="hidden sm:inline">
                  <strong>{totalCommits}</strong>{' '}
                  <span
                    aria-label={`Commits on ${branch}`}
                    className="none text-[#7d8590] lg:inline"
                  >
                    commits
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RepoHomeFileExplorerHeader;
