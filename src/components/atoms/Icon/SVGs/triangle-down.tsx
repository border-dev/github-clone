import classNames from 'classnames';
import { IconPropsDefaults } from '../icons-map';
import { IconSVG } from '../types';

export const TriangleDown: React.FC<IconSVG> = ({
  className = IconPropsDefaults.className,
  color = IconPropsDefaults.color,
  size = IconPropsDefaults.size,
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    className={classNames([className, color])}
    focusable="false"
    aria-hidden="true"
  >
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
  </svg>
);
