import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { REPO_HOME_FOOTER_LINKS } from '@lib/url-constants';

const RepoHomeFooter = () => {
  return (
    <footer
      className="m-auto w-full max-w-7xl sm:px-10 lg:px-4"
      role="contentinfo"
    >
      <h2 className="sr-only">Footer</h2>

      <div className="relative mt-10 flex items-center border-t border-[#21262d] pb-2 pt-10 text-xs text-[#7d8590] lg:flex-row lg:flex-wrap">
        <div className="mb-2 flex flex-wrap justify-start lg:mb-0 lg:w-1/6 lg:justify-between">
          <div className="mt-2 flex items-center lg:mt-0">
            <Link
              aria-label="Homepage"
              className="mr-2 text-[#6e7681]"
              href="https://github.com"
            >
              <Icon name="github" size={24} />
            </Link>{' '}
            <span>© 2023 GitHub, Inc.</span>
          </div>
        </div>

        <nav aria-label="Footer" className="w-full lg:w-2/3">
          <h3 className="sr-only" id="sr-footer-heading">
            Footer navigation
          </h3>
          <ul
            className="mb-2 flex w-full flex-wrap justify-center lg:mb-0 lg:justify-between"
            aria-labelledby="sr-footer-heading"
          >
            {REPO_HOME_FOOTER_LINKS.map(({ title, url }) => (
              <li key={title} className="mr-4 lg:mr-0">
                <Link className="text-[#2f81f7] hover:underline" href={url}>
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="text-[#2f81f7] hover:underline"
                href="https://github.com/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex justify-center pb-10">
        <span className="text-xs text-[#e6edf3]"></span>
      </div>
    </footer>
  );
};

export default RepoHomeFooter;
