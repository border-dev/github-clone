import Icon from '@components/atoms/Icon';
import { IconKeyNames } from '@components/atoms/Icon/icons-map';
import Link from 'next/link';

type RepoHeaderNavProps = {
  owner: string;
  name: string;
  currentPath: string;
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

const isActive = (currentPart: string, path?: string) => {
  if (!path) {
    return 'page';
  }

  return currentPart === path ? 'page' : false;
};

const RepoHeaderNav = ({ owner, name, currentPath }: RepoHeaderNavProps) => {
  return (
    <div className="px-4">
      <nav className="flex min-h-[3rem] justify-between overflow-hidden shadow-[inset_0_-1px_#21262d]">
        <ul className="flex items-center gap-2">
          {secondaryHeaderLinks.map(({ title, href, iconName, path }) => (
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
                <span data-content="Code">{title}</span>
                <span className="Counter ml-2 hidden bg-[#6e768166] text-[#e6edf3]">
                  {/* TODO: add counters */}0
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default RepoHeaderNav;
