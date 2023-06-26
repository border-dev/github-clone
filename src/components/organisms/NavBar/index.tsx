'use client';

import Icon from '@components/atoms/Icon';
import Link from '@components/modules/Link';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import NavHeader from './NavHeader';
import RepoHeaderNav from './RepoHeaderNav';

const NavBar = () => {
  const { data: session } = useSession();
  const user = session?.user?.name;
  const image = session?.user?.image;
  const path = usePathname();
  const [, owner, name, currentPath] = path.split('/');
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <header className="header-shadow-b bg-[#010409] text-white">
        <div className="flex gap-3 p-4 pb-2">
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
              <NavHeader owner={owner} name={name} />
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
                    {user && image ? (
                      <Image
                        className="inline-block h-8 w-8 rounded-full"
                        src={image}
                        width={32}
                        height={32}
                        alt={user}
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
        {owner && name && (
          <RepoHeaderNav owner={owner} name={name} currentPath={currentPath} />
        )}
      </header>
    </div>
  );
};

export default NavBar;
