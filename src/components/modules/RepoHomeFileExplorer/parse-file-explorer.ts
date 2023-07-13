import {
  Commit,
  FileExplorerQuery,
  GitActor,
  Tree,
  TreeEntry,
} from '@lib/generated/graphql';

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

export type RepoHomeFileExplorer = {
  latestCommitSummary: CommitSummary;
  files: ExplorerLineItemCommitHistory[];
};

export const sortFiles = (files: ExplorerLineItem[]) =>
  files.sort((a, b) => {
    if (a.type === 'tree' && b.type !== 'tree') {
      return -1;
    }
    if (a.type !== 'tree' && b.type === 'tree') {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });

export const parseLineItems = (fileTree?: Tree) => {
  if (!fileTree) {
    return [];
  }

  const items: ExplorerLineItem[] =
    fileTree?.entries?.map(({ name, path, type, oid }: TreeEntry) => {
      return {
        name,
        path: path ?? '',
        type,
        oid,
      };
    }) ?? [];

  return sortFiles(items);
};

const getHistoryTreeCommitIds = (commitHistoryFiles: TreeEntry[]) =>
  commitHistoryFiles?.map((entry) => String(entry.oid));

const getMatchedCommitsByFileCommitId = (
  file: ExplorerLineItem,
  commits: Commit[],
) =>
  commits.filter((commit) => {
    const fileCommitIds = getHistoryTreeCommitIds(commit.tree.entries ?? []);
    return fileCommitIds.includes(String(file.oid));
  });

const pullFilesEarliestCommitInfo = (
  commits: Commit[],
  entries: ExplorerLineItem[],
): ExplorerLineItemCommitHistory[] => {
  return entries.map((file) => {
    const matchedCommits = getMatchedCommitsByFileCommitId(file, commits);
    const earliestCommit = matchedCommits[matchedCommits.length - 1];
    const fileWithHistory = {
      ...file,
      messageHeadline: earliestCommit.messageHeadline,
      committedDate: earliestCommit.committedDate,
    };

    // fetch the commit set the furthest into the past
    // flag it if the commit is further back in history than the 100 limit
    if (matchedCommits.length === commits.length) {
      return {
        ...fileWithHistory,
        hasEarlierHistory: true,
      };
    }

    return {
      ...fileWithHistory,
      hasEarlierHistory: false,
    };
  });
};

export const parseFileExplorer = (
  data?: FileExplorerQuery,
): RepoHomeFileExplorer => {
  const latestCommit = data?.repository?.defaultBranchRef?.target as Commit;
  const author = latestCommit.author as GitActor | undefined;

  const commitRef = data?.repository?.ref?.target as Commit | undefined;
  const commits = (commitRef?.history.nodes as Commit[]) ?? [];
  const fileTree = data?.repository?.tree as Tree | undefined;
  const flattenedFilesList = parseLineItems(fileTree);
  const files = pullFilesEarliestCommitInfo(commits, flattenedFilesList);

  return {
    latestCommitSummary: {
      shortCommitHash: latestCommit.abbreviatedOid,
      lastCommitMessage: latestCommit.message,
      lastCommittedDate: latestCommit.committedDate,
      commitAuthor: author?.name as string,
      commitAuthorAvatarUrl: author?.avatarUrl,
      totalCommits: latestCommit.history?.totalCount,
    },
    files,
  };
};
