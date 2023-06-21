'use client';

import classNames from 'classnames';
import { useState } from 'react';
import Icon from '../Icon';
import Link from '../Link';

type MobileMenuProps = {
  isMenuOpen: boolean;
  navMenu: any[];
};

const MobileMenu = ({ isMenuOpen, navMenu }: MobileMenuProps) => {
  const [isSignInMenuOpen, setIsSignInMenuOpen] = useState(false);

  return (
    // Dropdown menu, show/hide based on menu state.

    // Entering: "transition ease-out duration-100"
    //   From: "transform opacity-0 scale-95"
    //   To: "transform opacity-100 scale-100"
    // Leaving: "transition ease-in duration-75"
    //   From: "transform opacity-100 scale-100"
    //   To: "transform opacity-0 scale-95"

    <nav
      className={classNames(
        'flex flex-grow flex-col items-center md:flex md:flex-row md:justify-end md:pb-0',
        {
          flex: isMenuOpen,
          hidden: !isMenuOpen,
        },
      )}
    >
      {navMenu.map(({ title, url }) => (
        <Link
          key={url}
          className="hover:text-grey-600 px-2 text-sm text-black dark:text-white md:px-3 lg:px-2"
          href={url}
        >
          {title}
        </Link>
      ))}

      <div className="inline-flex list-none items-center gap-2 lg:ml-auto">
        {/* TODO: turn into notification icon */}
        {/* <button className="focus:shadow-outline mt-2 block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0">
          Sign in
        </button> */}
        <div className="relative">
          <button
            onClick={() => setIsSignInMenuOpen((prev) => !prev)}
            className="group inline-flex items-center justify-center fill-black px-2 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:fill-white"
          >
            <Icon name="user-circle" size={20} />
          </button>
          {/* TODO: make sure transitions work */}
          {/* x-show="open"
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95" */}
          {isSignInMenuOpen && (
            <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  <Link
                    href="#"
                    className="-m-3 flex flex-col items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                  >
                    <div>
                      <p className="mt-2 text-base font-medium text-black">
                        Templates
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Responsive website templates for designers, businesses,
                      and personal use
                    </p>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 flex flex-col items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                  >
                    <div>
                      <p className="mt-2 text-base font-medium text-black">
                        Community
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Connect with 75,000+ community members who are
                      contributing.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
