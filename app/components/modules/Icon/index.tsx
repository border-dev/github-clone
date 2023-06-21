import type { IconSVG } from './icon-svg';
import { ICONS_MAP, IconKeyNames } from './icons-map';

type IconProps = IconSVG & { name: IconKeyNames };

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const SVG = ICONS_MAP.get(name);
  // TODO: indicate missing icon as a question mark or square
  return <>{SVG ? <SVG {...rest} /> : null}</>;
};

export default Icon;
