import Icon from '../Icon';

type RepoActionsSelectorProps = {};

const RepoActionsSelector = (props: RepoActionsSelectorProps) => (
  <div className="flex min-h-[32px] items-start">
    <div className="flex gap-2">
      <h2 className="sr-only absolute m-0 text-[32px] font-semibold">
        Repository actions
      </h2>
      <h2 className="sr-only absolute m-0 text-[32px] font-semibold">
        Add file
      </h2>
      <button className="util-btn">
        <span className="grid-template-areas-text-trailing grid shrink-0 grow basis-auto grid-cols-[min-content_minmax(0px,auto)_min-content] content-center items-center justify-center">
          <span className="col-start-[text] col-end-[text] row-start-[text] row-end-[text] whitespace-nowrap leading-[calc(1.42857)]">
            Add file
          </span>
        </span>
        <span className="pointer-events-none mr-[-4px] flex">
          <Icon
            className="icon inline-block select-none align-bottom"
            name="triangle-down"
            size={16}
          />
        </span>
      </button>
    </div>
  </div>
);

export default RepoActionsSelector;
