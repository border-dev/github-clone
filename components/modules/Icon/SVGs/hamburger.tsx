import classNames from 'classnames';
import { IconPropsDefaults, IconSVG } from '../Icons-map';

export const Hamburger: React.FC<IconSVG> = ({
  className = IconPropsDefaults.className,
  color = IconPropsDefaults.color,
  size = IconPropsDefaults.size,
}) => (
  <svg
    width={size}
    height={size}
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    fill="none"
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames([className, color])}
    focusable="false"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
