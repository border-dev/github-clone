'use client';

import Icon from '@components/atoms/Icon';
import Link from '@components/modules/Link';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

type NavBarProps = {};

const NavBar = (props: NavBarProps) => {
  const { data: session } = useSession();
  const name = session?.user?.name;
  const image = session?.user?.image;

  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <header
        className="header-shadow-b text-white "
        style={{ backgroundColor: '#010409' }}
      >
        <div className="flex gap-3 p-4">
          <div className="flex flex-auto gap-2">
            <div>
              <button className="header-sidebar-btn btn--iconOnly btn--secondary">
                <Icon
                  name="hamburger"
                  className="pointer-events-none overflow-visible fill-current align-text-bottom text-inherit"
                  size={16}
                />
              </button>
              {/* TODO: add kick-out menu */}
            </div>
            <Link href="/" className="ml-2 h-8 w-8 border-0 outline-offset-2">
              <Icon
                name="github"
                className="fill-dark h-8  w-8 dark:fill-white"
              />
            </Link>
            <div className="h-8 min-w-0 flex-auto">
              <div className="md:hidden">
                <Link href="/" className="flex items-center">
                  Dashboard
                </Link>
              </div>
              <div className="inline-flex w-full min-w-0 max-w-full overflow-hidden">
                <nav aria-label="Page context" className="w-full">
                  <ul role="list" className="flex flex-row">
                    <li>
                      <Link
                        href="/"
                        className="dashboard-link grid h-12 w-full cursor-pointer appearance-none items-center rounded-md border-0 bg-transparent text-left text-sm font-semibold text-inherit"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="global-navbar-end">
            {/* TODO: enable this when adding action menu buttons */}
            {/* <div className="global-action-menu grid grid-flow-col gap-2">
            </div> */}
            <div className="user">
              <button
                onClick={() => setIsAvatarMenuOpen((prev) => !prev)}
                className="Button logo"
              >
                <span className="Button--content">
                  <span className="Button--label text-[#2f81f7]">
                    {name && image ? (
                      <Image
                        className="inline-block h-8 w-8 rounded-full"
                        src={image}
                        width={32}
                        height={32}
                        alt={name}
                      />
                    ) : (
                      <Icon name="user-circle" className="inline-block" />
                    )}
                  </span>
                </span>
              </button>
              {/* TODO: add kick-out menu */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
