import Link from '@components/atoms/Link';

type NavHeaderProps = {
  owner: string;
  name: string;
};

const NavHeader = ({ owner, name }: NavHeaderProps) => {
  return (
    <>
      <div className="md:hidden">
        {owner && name ? (
          <button className="dashboard-link grid h-12 w-full cursor-pointer rounded-md border-0 bg-transparent text-left text-[inherit] duration-[80ms] hover:bg-[#b1bac41f]">
            <span className="Button--content">
              <span className="Button--label">
                <span className="grid w-fit grid-flow-col items-center text-xs text-[#7d8590]">
                  {owner}
                </span>
                <strong className="flex min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  {name}
                </strong>
              </span>
            </span>
          </button>
        ) : (
          <Link
            href="/"
            className="flex items-center rounded-md duration-[80ms] hover:bg-[#b1bac41f]"
          >
            Dashboard
          </Link>
        )}
      </div>
      <div className="inline-flex w-full min-w-0 max-w-full overflow-hidden">
        <nav aria-label="Page context" className="w-full">
          <ul role="list" className="flex flex-row text-sm">
            {owner && name ? (
              <>
                <li>
                  <Link href={`/${owner}`} className="flex items-center">
                    {owner}
                  </Link>
                  <span className="inline-grid grid-flow-col items-center">
                    /
                  </span>
                </li>
                <li>
                  <Link href={`/${owner}/${name}`}>{name}</Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/"
                  className="grid h-12 w-full cursor-pointer items-center rounded-md bg-transparent text-left text-sm font-semibold text-inherit duration-[80ms] hover:bg-[#b1bac41f]"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavHeader;
