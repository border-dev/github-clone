import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';

type FileExplorerNavigationProps = {
  owner: string;
  name: string;
};

const FileExplorerNavigation = ({
  owner,
  name,
}: FileExplorerNavigationProps) => {
  return (
    <div className="file-nav mb-4 flex items-start">
      <div className="relative">{/* branch switcher dropdown */}</div>
      {/* supposedly where modal overlay sits */}
      <div className="hidden items-center self-stretch text-sm leading-[1] lg:flex">
        <Link
          href={`/${owner}/${name}/branches`}
          className="ml-4 text-[#e6edf3]"
        >
          <Icon name="git-branch" className="icon" size={16} />{' '}
          <strong>0</strong> <span className="text-[#7d8590]">branches</span>
        </Link>
        <Link href={`/${owner}/${name}/tags`} className="ml-4 text-[#e6edf3]">
          <Icon name="tag" className="icon" size={16} /> <strong>0</strong>{' '}
          <span className="text-[#7d8590]">tags</span>
        </Link>
      </div>
      <div className="flex-auto"></div>
      <Link
        href="#"
        className="btn ml-2 hidden border-[#f0f6fc1a] bg-[#21262d] text-[#c9d1d9] shadow-[0_0_transparent] transition duration-[80ms] md:block"
      >
        Got to file
      </Link>
      <div className="btn ml-2 hidden border-[#f0f6fc1a] bg-[#21262d] text-[#c9d1d9] shadow-[0_0_transparent] transition duration-[80ms] md:block">
        Add file
      </div>
      <div className="btn ml-2 hidden border-[#f0f6fc1a] bg-[#238636] text-[#c9d1d9] shadow-[0_0_transparent] transition duration-[80ms] md:block">
        <Icon
          name="code-simple"
          size={16}
          className="mr-2 inline overflow-visible fill-[#c9d1d9] text-[#c9d1d9]"
        />
        Code
      </div>
    </div>
  );
};

export default FileExplorerNavigation;
