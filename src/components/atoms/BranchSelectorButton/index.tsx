import Icon from '../Icon';

type BranchSelectorButton = {
  branch: string;
};

const BranchSelectorButton = ({ branch }: BranchSelectorButton) => (
  <button className="util-btn flex">
    <span className="grid-template-areas-text-trailing grid shrink-0 grow basis-auto grid-cols-[min-content_minmax(0px,auto)_min-content] content-center items-center justify-center">
      <span className="col-start-[text] col-end-[text] row-start-[text] row-end-[text] mr-2 whitespace-nowrap leading-[calc(1.42857)]">
        <div className="flex">
          <div className="mr-1 text-[#7d8590]">
            <Icon
              className="icon inline-block select-none align-text-bottom"
              name="git-branch"
              size={16}
            />
          </div>
          <div className="min-w-0 max-w-[125px] overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            <span className="min-w-0 text-[#c9d1d9]"> {branch}</span>
          </div>
        </div>
      </span>
      <span className="pointer-events-none col-start-[trailingVisual] col-end-[trailingVisual] row-start-[trailingVisual] row-end-[trailingVisual] flex">
        <Icon
          className="icon inline-block select-none align-bottom"
          name="triangle-down"
          size={16}
        />
      </span>
    </span>
  </button>
);

export default BranchSelectorButton;
