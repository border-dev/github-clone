export type ExplorerLineItem = {
  name: string;
  path: string;
  type: string;
  oid: string;
};

export type ExplorerLineItemCommitHistory = ExplorerLineItem & {
  messageHeadline: string;
  committedDate: string;
};

export type CommitSummary = {
  shortCommitHash: string;
  lastCommitMessage: string;
  lastCommittedDate: any;
  commitAuthor: string;
  commitAuthorAvatarUrl: any;
  totalCommits: number;
};
