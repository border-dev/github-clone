import { Commit, CommitHistoryQuery } from '@lib/generated/graphql';

export type ExplorerLineItemDetails = {
  latestCommitMessage?: string;
  lastCommittedDate: string;
};

export const parseFileInfo = (
  data: CommitHistoryQuery,
): ExplorerLineItemDetails => {
  const [node] = (data.repository?.info?.target as Commit).history.nodes ?? [];

  return {
    latestCommitMessage: node?.messageHeadline ?? '',
    lastCommittedDate: node?.committedDate,
  };
};
