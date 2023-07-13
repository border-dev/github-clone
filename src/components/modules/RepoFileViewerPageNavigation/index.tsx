import BranchSelectorButton from '@components/atoms/BranchSelectorButton';
import BreadCrumbs from '@components/atoms/BreadCrumbs';
import RepoActionsSelector from '@components/atoms/RepoActionsSelector';
import SidePanelCollapseButton from '@components/atoms/SidePanelCollapseButton';

type RepoFileViewerPageNavigationProps = {
  owner: string;
  name: string;
  branch: string;
  path: string;
};

const RepoFileViewerPageNavigation = ({
  owner,
  name,
  branch,
  path,
}: RepoFileViewerPageNavigationProps) => (
  <div>
    <div className="px-4 pt-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-start">
            <div className="mr-2 block">
              <h2 className="m-0 text-sm font-semibold">
                <SidePanelCollapseButton />
              </h2>
            </div>
            <div className="mr-2">
              <BranchSelectorButton branch={branch} />
            </div>
            <div className="flex min-w-0 pr-2">
              <BreadCrumbs {...{ owner, name, branch, path }} />
            </div>
          </div>
          <RepoActionsSelector />
        </div>
      </div>
    </div>
  </div>
);

export default RepoFileViewerPageNavigation;
