import { UserTopReposQuery } from '@lib/generated/graphql';

export interface TopRepo {
  id: string;
  name: string;
  description?: string | null;
  owner: string;
  ownerAvatar: string;
  language?: string | null;
  languageColor?: string | null;
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

export function parseTopReposQuery(data: UserTopReposQuery): TopRepo[] {
  const repos = data.viewer.topRepositories.nodes ?? [];
  return repos.reduce((acc: TopRepo[], repo) => {
    if (!repo) {
      return acc;
    }
    return [
      ...acc,
      {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        owner: repo.owner.login,
        ownerAvatar: repo.owner.avatarUrl,
        language: repo.primaryLanguage?.name,
        languageColor: repo.primaryLanguage?.color,
        isPrivate: repo.isPrivate,
        stargazerCount: repo.stargazerCount,
        forkCount: repo.forkCount,
        updatedAt: repo.updatedAt,
      },
    ];
  }, []);
}
