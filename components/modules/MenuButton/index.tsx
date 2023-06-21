import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import Icon from '../Icon';

type MenuButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuButton = ({ isMenuOpen, setIsMenuOpen }: MenuButtonProps) => {
  return (
    <button
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:text-black focus:outline-none md:hidden"
    >
      <Icon
        name="hamburger"
        className={classNames([isMenuOpen ? 'hidden' : 'block', 'h-6 w-6'])}
      />
      <Icon
        name="close"
        className={classNames([isMenuOpen ? 'block' : 'hidden', 'h-6 w-6'])}
      />
    </button>
  );
};

export default MenuButton;
