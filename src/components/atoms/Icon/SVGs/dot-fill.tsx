import classNames from 'classnames';
import { IconPropsDefaults } from '../icons-map';
import { IconSVG } from '../types';

export const DotFill: React.FC<IconSVG> = ({
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
    <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
  </svg>
);
