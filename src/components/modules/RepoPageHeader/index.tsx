import ButtonDropdownCaret from '@components/atoms/ButtonDropdownCaret';
import Icon from '@components/atoms/Icon';
import { IconKeyNames } from '@components/atoms/Icon/icons-map';
import Link from '@components/atoms/Link';
import { Repo, RepoCount } from '@utils/parsers/parse-repo';
import Image from 'next/image';

type RepoPageHeaderProps = {
  repo: Repo;
  owner: string;
  name: string;
};

type SecondaryHeaderLinks = {
  title: string;
  action: string;
  iconName: IconKeyNames;
};

const secondaryHeaderLinks: SecondaryHeaderLinks[] = [
  {
    title: 'Watchers',
    action: 'Unwatch',
    iconName: 'eye',
  },
  {
    title: 'Forks',
    action: 'Fork',
    iconName: 'repo-forked',
  },
  {
    title: 'Stargazers',
    action: 'Star',
    iconName: 'star-outline',
  },
];

const mapCountToButton = (repoCounts: RepoCount[]) =>
  secondaryHeaderLinks.map((btn) => {
    const { count } = repoCounts.find(({ title }) => btn.title === title) ?? {
      title: '',
      action: '',
      count: 0,
    };

    return {
      ...btn,
      count,
    };
  });

const RepoPageHeader = ({ repo, owner, name }: RepoPageHeaderProps) => {
  return (
    <div className="pt-4">
      <div className="m-auto mb-4 flex max-w-7xl flex-wrap justify-end gap-4 px-4 md:px-6 lg:px-8">
        <div className="mr-4 min-w-0 max-w-full flex-auto">
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
          <ul className="pagehead-actions py-[2px] md:inline">
            {/* TODO: add pins, watches, forks, and stars */}
            <li className="float-left mr-2 text-xs text-[#e6edf3]">
              <div className="block">
                <div className="float-left">
                  <div className="btn btn-sm">
                    <Icon
                      className="icon mr-2 fill-[#7d8590] align-text-top"
                      name="pin"
                      size={16}
                    />
                    Edit Pins <ButtonDropdownCaret />
                  </div>
                </div>
              </div>
            </li>
            {mapCountToButton(repo.repoActivityCounts).map(
              ({ title, action, count, iconName }) => (
                <li
                  key={title}
                  className="float-left mr-2 text-xs text-[#c8d1d9]"
                >
                  <div className="relative block text-sm">
                    <div className="relative block text-sm">
                      <div className="btn btn-sm">
                        <Icon
                          className="icon mr-2 fill-[#7d8590] align-text-top"
                          name={iconName}
                          size={16}
                        />
                        {action}{' '}
                        <div className="Counter btn-counter">{count}</div>
                        <ButtonDropdownCaret />
                      </div>
                    </div>
                  </div>
                </li>
              ),
            )}
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
