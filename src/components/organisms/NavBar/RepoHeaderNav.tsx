import Icon from '@components/atoms/Icon';
import { IconKeyNames } from '@components/atoms/Icon/icons-map';
import { useRepoPageQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { RepoCount, parseRepo } from '@utils/parsers/parse-repo';
import Link from 'next/link';

type RepoHeaderNavProps = {
  owner: string;
  name: string;
  currentPath: string;
  isRepoPath: boolean;
};

const generateHref = (basePath: string, path?: string) =>
  path ? `${basePath}/${path}` : basePath;

type SecondaryHeaderLinks = {
  title: string;
  altTitle?: string;
  path?: string;
  href: (basePath: string, path?: string) => string;
  iconName: IconKeyNames;
};

const secondaryHeaderLinks: SecondaryHeaderLinks[] = [
  {
    title: 'Code',
    href: generateHref,
    iconName: 'code-simple',
  },
  {
    title: 'Issues',
    path: 'issues',
    href: generateHref,
    iconName: 'code-issue',
  },
  {
    title: 'Pull requests',
    altTitle: 'Pulls',
    path: 'pulls',
    href: generateHref,
    iconName: 'code-pull-request',
  },
];

const mapCountToTab = (repoCounts: RepoCount[]) =>
  secondaryHeaderLinks.map((link) => {
    const { count } = repoCounts.find(({ title }) => link.title === title) ?? {
      title: '',
      count: 0,
    };

    return {
      ...link,
      count,
    };
  });

const isActive = (currentPart: string, path?: string) => {
  if (!path) {
    return 'page';
  }

  return currentPart === path ? 'page' : false;
};

const RepoHeaderNav = ({
  owner,
  name,
  currentPath,
  isRepoPath,
}: RepoHeaderNavProps) => {
  const { data, error, isLoading } = useRepoPageQuery(
    graphqlClient,
    {
      owner,
      name,
    },
    { enabled: isRepoPath },
  );

  if (error || !data) {
    return null;
  }

  const { repoCounts } = parseRepo(data);

  return (
    <div className="px-4">
      <nav className="flex min-h-[3rem] justify-between overflow-hidden shadow-[inset_0_-1px_#21262d]">
        <ul className="flex items-center gap-2">
          {mapCountToTab(repoCounts).map(
            ({ title, href, iconName, path, count }) => (
              <li key={title} className="inline-flex">
                <Link
                  href={href(`/${owner}/${name}`, path)}
                  aria-current={isActive(currentPath, path)}
                  className="UnderlineNav-item"
                >
                  <Icon
                    name={iconName}
                    size={16}
                    className="mr-2 inline overflow-visible fill-[#7d8590] text-[#7d8590]"
                  />
                  <span>{title}</span>
                  {title !== 'Code' && (
                    <span className="Counter ml-2 hidden bg-[#6e768166] text-[#e6edf3]">
                      {count}
                    </span>
                  )}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>
  );
};

export default RepoHeaderNav;
