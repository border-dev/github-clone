import {
  BookOutline,
  ChevronUp,
  Clipboard,
  Close,
  CodeIssue,
  CodePullRequest,
  CodeSimple,
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
  'book-outline',
  'code-simple',
  'code-issue',
  'code-pull-request',
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
  ['book-outline', BookOutline],
  ['code-simple', CodeSimple],
  ['code-issue', CodeIssue],
  ['code-pull-request', CodePullRequest],
  ['tablet-touch', TabletTouch],
  ['trending-upward', TrendingUpward],
  ['trending-downward', TrendingDownward],
  ['trending-neutral', TrendingNeutral],
]);
