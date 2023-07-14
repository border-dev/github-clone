import React from 'react';
import Icon from '../Icon';

type SidePanelCollapseButtonProps = {};

const SidePanelCollapseButton = (props: SidePanelCollapseButtonProps) => (
  <button className="util-btn-outline relative">
    <Icon
      className="icon inline-block select-none align-text-bottom"
      name="sidebar-collapse"
      size={16}
    />
  </button>
);

export default SidePanelCollapseButton;
