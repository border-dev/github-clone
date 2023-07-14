import { UserTopReposQuery } from '@lib/generated/graphql';
import { UserTopRepo } from './types/UserTopRepo';

export function parseTopReposQuery(data: UserTopReposQuery): UserTopRepo[] {
  const repos = data.viewer.topRepositories.nodes ?? [];
  return repos.reduce((acc: UserTopRepo[], repo) => {
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
