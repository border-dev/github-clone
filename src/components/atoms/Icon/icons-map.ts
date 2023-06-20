import {
  ChevronUp,
  Clipboard,
  Close,
  Github,
  Hamburger,
  Quote,
  TabletTouch,
  TrendingDownward,
  TrendingNeutral,
  TrendingUpward,
  UserCircle,
  WindowCodeBlock,
} from './SVGs';
import type { IconSVG } from './types';

export const enum ICON_NAMES {
  'github',
  'chevron-up',
  'clipboard',
  'window-code-block',
  'quote',
  'hamburger',
  'close',
  'user-circle',
  'tablet-touch',
  'trending-upward',
  'trending-downward',
  'trending-neutral',
}

export type IconKeyNames = keyof typeof ICON_NAMES;

export const IconPropsDefaults: IconSVG = {
  className: 'fill-current',
  color: 'text-secondary-700',
  size: 32,
};

export const ICONS_MAP = new Map<IconKeyNames, React.FC<IconSVG>>([
  ['github', Github],
  ['chevron-up', ChevronUp],
  ['clipboard', Clipboard],
  ['window-code-block', WindowCodeBlock],
  ['quote', Quote],
  ['hamburger', Hamburger],
  ['close', Close],
  ['user-circle', UserCircle],
  ['tablet-touch', TabletTouch],
  ['trending-upward', TrendingUpward],
  ['trending-downward', TrendingDownward],
  ['trending-neutral', TrendingNeutral],
]);
