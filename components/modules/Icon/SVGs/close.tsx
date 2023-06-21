import classNames from 'classnames';
import { IconPropsDefaults, IconSVG } from '../Icons-map';

export const Close: React.FC<IconSVG> = ({
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
