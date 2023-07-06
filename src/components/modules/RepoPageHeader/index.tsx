import Link from '@components/atoms/Link';
import Image from 'next/image';
import { Repo } from '../RepoHomePageFileExplorer/parse-repo';

type RepoPageHeaderProps = {
  repo: Repo;
  owner: string;
  name: string;
};

const RepoPageHeader = ({ repo, owner, name }: RepoPageHeaderProps) => {
  return (
    <div className=" pt-4">
      <div className="m-auto mb-4 flex max-w-7xl flex-wrap justify-end gap-4 px-4 md:px-6 lg:px-8">
        <div className=" mr-4 min-w-0 max-w-full flex-auto">
          <div className="flex flex-wrap items-center break-words text-lg font-normal md:text-2xl">
            <Image
              src={repo.orgAvatarUrl ?? ''}
              className="mr-2 hidden shrink-0 overflow-hidden rounded-md bg-[#ffffff1a] align-middle leading-[1] shadow-[0_0_0_1px_#f0f6fc1a] md:block"
              alt={owner}
              width={24}
              height={24}
            />
            <strong className="mr-2 hidden self-stretch md:block">
              <Link href={`/${owner}/${name}`} className="text-[#e6edf3]">
                {name}
              </Link>
            </strong>
            <span className="mr-1 inline-block rounded-[2rem] border-[1px] border-[#30363d] px-[7px] py-0 align-middle text-xs font-medium leading-[18px] text-[#7d8590] md:block">
              {repo.isPrivate ? 'Private' : 'Public'}
            </span>
          </div>
          <div className="hidden md:block"></div>
        </div>
        <div>
          <ul className="py-[2px] md:inline">
            {/* TODO: add pins, watches, forks, and stars */}
            {/* <li className='float-left mr-2 text-xs text-[#e6edf3]'></li> */}
          </ul>
        </div>
      </div>
      <div className="m-auto max-w-7xl">
        <div className="border-b border-b-[#30363d] xl:mx-8"></div>
      </div>
    </div>
  );
};

export default RepoPageHeader;
