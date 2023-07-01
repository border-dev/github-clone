import {
  Commit,
  FileExplorerQuery,
  GitActor,
  Tree,
  TreeEntry,
} from '@lib/generated/graphql';

export interface ExplorerLineItem {
  name: string;
  path: string;
  type: string;
}

export type RepoHomeFileExplorer = {
  shortCommitHash: string;
  lastCommitMessage: string;
  lastCommittedDate: any;
  commitAuthor: string;
  commitAuthorAvatarUrl: any;
  totalCommits: number;
  files: ExplorerLineItem[];
};

export const parseFileExplorer = (
  data?: FileExplorerQuery,
): RepoHomeFileExplorer => {
  const defaultBranch = data?.repository?.defaultBranchRef?.target;
  const commit = defaultBranch as Commit;
  const author = commit.author as GitActor | undefined;

  const fileTree = data?.repository?.tree as Tree | undefined;
  const files = parseLineItems(fileTree);

  return {
    shortCommitHash: commit.abbreviatedOid,
    lastCommitMessage: commit.message,
    lastCommittedDate: commit.committedDate,
    commitAuthor: author?.name as string,
    commitAuthorAvatarUrl: author?.avatarUrl,
    totalCommits: commit.history?.totalCount,
    files,
  };
};

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
      };
    }) ?? [];

  return items.sort((a, b) => {
    if (a.type === 'tree' && b.type !== 'tree') {
      return -1;
    }
    if (a.type !== 'tree' && b.type === 'tree') {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });
};
