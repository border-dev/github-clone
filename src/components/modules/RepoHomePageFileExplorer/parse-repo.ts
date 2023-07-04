import { RepoPageQuery } from '@lib/generated/graphql';

export type Repo = {
  isOrg: boolean;
  orgAvatarUrl: any;
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  watcherCount: number;
  openIssueCount: number;
  openPullRequestCount: number;
  description?: string | null;
  homepageUrl: any;
};

export const parseRepo = (data: RepoPageQuery): Repo => {
  const repository = data?.repository!;

  return {
    // @ts-ignore
    isOrg: typeof repository.owner?.orgName === 'string',
    // @ts-ignore
    orgAvatarUrl: repository.owner?.orgAvatarUrl,
    isPrivate: repository.isPrivate,
    stargazerCount: repository.stargazerCount,
    forkCount: repository.forkCount,
    watcherCount: repository.watchers.totalCount,
    openIssueCount: repository.issues.totalCount,
    openPullRequestCount: repository.pullRequests.totalCount,
    description: repository.description,
    homepageUrl: repository.homepageUrl,
  };
};
