import classNames from 'classnames';
import { IconPropsDefaults, IconSVG } from '../Icons-map';

export const ChevronUp: React.FC<IconSVG> = ({
  className = IconPropsDefaults.className,
  color = IconPropsDefaults.color,
  size = IconPropsDefaults.size,
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames([className, color])}
    focusable="false"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);
