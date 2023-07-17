import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { HOME_FEED_FOOTER_LINKS } from '@lib/url-constants';

const HomeFeedFooter = () => {
  return (
    <div className="mx-auto my-8 grid w-full max-w-none grid-cols-5 gap-4 px-0 text-xs">
      <div className="col-span-2">
        <Link className="flex items-center" href="https://github.com/">
          <Icon
            name="github"
            className="fill-dark mr-2 dark:fill-white"
            size={24}
          />
          clone made with ❤ by Morgan Worrell
        </Link>
      </div>
      <div className="">
        <ul className="pl-6">
          {HOME_FEED_FOOTER_LINKS.slice(0, 5).map(({ title, url }) => (
            <li key={title} className="mb-1">
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <ul className="pl-6">
          {HOME_FEED_FOOTER_LINKS.slice(5, 9).map(({ title, url }) => (
            <li key={title} className="mb-1">
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <ul className="pl-6">
          {HOME_FEED_FOOTER_LINKS.slice(9).map(({ title, url }) => (
            <li key={title} className="mb-1">
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeFeedFooter;
