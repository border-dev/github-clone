import { buildPathSegments } from '@utils/path-utils';
import Icon from '../Icon';
import Link from '../Link';

type BreadCrumbsProps = {
  owner: string;
  name: string;
  branch: string;
  path: string;
};

const BreadCrumbs = ({
  owner,
  name,
  branch,
  path: repoPath,
}: BreadCrumbsProps) => {
  const paths = buildPathSegments(repoPath);

  return (
    <div className="flex min-w-0 max-w-full shrink flex-row flex-wrap items-center">
      <nav className="max-w-full">
        <h2 className="sr-only m-0 text-[32px] font-semibold">Breadcrumbs</h2>
        <ol className="inline-block max-w-full">
          <li className="inline-block max-w-full">
            <Link
              className="font-semibold text-[#2f81f7] hover:underline"
              href={`/${owner}/${name}/tree/${branch}`}
            >
              {name}
            </Link>
          </li>
          <li className="inline-block max-w-full">
            <span className="px-1 text-[#7d8590]">/</span>
            {paths.map(({ title, path, isLastPath }) => {
              return isLastPath ? (
                <>
                  <h1 className="m-0 inline-block max-w-full font-semibold">
                    {title}
                  </h1>
                  <span className="px-1 text-[#7d8590]">/</span>
                </>
              ) : (
                <>
                  <Link
                    href={`/${owner}/${name}/tree/${branch}/${path}`}
                    className="text-[#2f81f7] hover:underline"
                  >
                    {title}
                  </Link>
                  <span className="px-1 text-[#7d8590]">/</span>
                </>
              );
            })}
          </li>
        </ol>
      </nav>
      <button aria-label="Copy path" className="util-btn-outline ml-2">
        <Icon
          className="icon inline-block select-none align-text-bottom"
          name="copy"
          size={16}
        />
      </button>
    </div>
  );
};

export default BreadCrumbs;
