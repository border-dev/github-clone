import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { stripDomain } from '@utils/strip-domain';

type HomepageUrlProps = {
  homePageURL?: string | null;
};

const HomepageUrl = ({ homePageURL }: HomepageUrlProps) => {
  if (!homePageURL) {
    return null;
  }

  return (
    <div className="my-4 flex items-center">
      <Icon
        className="mr-2 flex-shrink-0 fill-[#e6edf3]"
        name="link"
        size={16}
      />
      <span className="inline-block min-w-0 max-w-full flex-auto overflow-hidden text-ellipsis whitespace-nowrap align-top">
        <Link
          className="text-sm font-semibold text-[#2f81f7] hover:underline"
          href={homePageURL}
        >
          {stripDomain(homePageURL)}
        </Link>
      </span>
    </div>
  );
};

export default HomepageUrl;
