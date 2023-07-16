import RepoTreeExplorer from '@components/modules/RepoTreeExplorer';

type RepoTreeViewerProps = {
  owner: string;
  name: string;
  branch?: string;
  path?: string;
};

const RepoTreeViewer = ({
  owner,
  name,
  branch: branchPath,
  path: fullPath,
}: RepoTreeViewerProps) => {
  const path = Array.isArray(fullPath)
    ? fullPath.join('/')
    : (fullPath as string);
  const revision = typeof branchPath === 'string' ? branchPath : 'HEAD';
  const branch = typeof branchPath === 'string' ? branchPath : 'main';

  return (
    <div className="m-auto flex max-w-full flex-wrap">
      <div className="flex max-w-full shrink grow basis-full flex-wrap">
        {/* Side panel */}
        <div className="w-full md:w-auto"></div>
        {/* Main */}
        <div className="order-2 mr-auto flex min-w-[1px] shrink grow basis-0 flex-col">
          <div className="m-auto w-full max-w-full grow p-0">
            <div className="m-auto mt-0 max-w-full pb-10">
              <RepoTreeExplorer {...{ owner, name, branch, revision, path }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoTreeViewer;
