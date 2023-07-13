import Icon from '../Icon';
import Link from '../Link';

type BreadCrumbsProps = {
  owner: string;
  name: string;
  branch: string;
  path: string;
};

const BreadCrumbs = ({ owner, name, branch, path }: BreadCrumbsProps) => {
  return (
    <div className="flex min-w-0 max-w-full shrink flex-row flex-wrap items-center">
      <nav className="max-w-full">
        <h2 className="sr-only m-0 text-[32px] font-semibold">Breadcrumbs</h2>
        <ol className="inline-block max-w-full">
          <li className="inline-block max-w-full">
            <Link
              className="font-semibold text-[#2f81f7]"
              href={`/${owner}/${name}/tree/${branch}`}
            >
              {name}
            </Link>
          </li>
        </ol>
      </nav>
      <div className="inline-block max-w-full">
        <span className="px-1 text-[#7d8590]">/</span>
        <h1 className="m-0 inline-block max-w-full font-semibold">{path}</h1>
        {/* TODO: make slashes generated the longer the path */}
        <span className="px-1 text-[#7d8590]">/</span>
      </div>
      {/* TODO: add copy to clipboard hook */}
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
