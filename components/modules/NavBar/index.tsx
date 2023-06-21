'use client';

import { useState } from 'react';
import Icon from '../Icon';
import MenuButton from '../MenuButton';
import MobileMenu from '../MobileMenu';

type NavBarProps = {};

const navMenu: any[] = [
  { title: 'Pull Requests', url: '/pulls' },
  { title: 'Issues', url: '/issues' },
];

const NavBar = (props: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <header className="relative mx-auto flex w-full flex-col bg-white p-4 font-bold dark:bg-gray-900 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg uppercase tracking-tight focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <span className="uppercase focus:ring-0 lg:text-lg">
              <Icon name="github" className="fill-dark dark:fill-white" />
            </span>
          </a>
          <MenuButton {...{ isMenuOpen, setIsMenuOpen }} />
        </div>

        <MobileMenu {...{ isMenuOpen, navMenu }} />
      </header>
    </div>
  );
};

export default NavBar;
