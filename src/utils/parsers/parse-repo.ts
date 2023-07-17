import {
  Language as LanguageNode,
  Organization,
  RepoPageQuery,
} from '@lib/generated/graphql';
import { Language } from './types/Language';

export type RepoCount = { title: string; count: number };

export type Repo = {
  isOrg: boolean;
  orgAvatarUrl: any;
  isPrivate: boolean;
  repoCounts: RepoCount[];
  repoActivityCounts: RepoCount[];
  description?: string | null;
  homepageUrl: any;
  topics: string[];
  languages: Language[];
};

type Topic =
  | (
      | {
          __typename?: 'RepositoryTopic' | undefined;
          id: string;
          topic: {
            __typename?: 'Topic' | undefined;
            name: string;
          };
        }
      | null
      | undefined
    )[]
  | null
  | undefined;

export const parseRepo = (data?: RepoPageQuery): Repo => {
  const repository = data?.repository!;

  const owner = data?.repository?.owner as Organization | undefined;

  return {
    isOrg: typeof owner?.name === 'string',
    orgAvatarUrl: owner?.avatarUrl,
    isPrivate: repository.isPrivate,
    repoCounts: [
      {
        title: 'Issues',
        count: repository.issues.totalCount,
      },
      {
        title: 'Pull requests',
        count: repository.pullRequests.totalCount,
      },
    ],
    repoActivityCounts: [
      {
        title: 'Watchers',
        count: repository.watchers.totalCount,
      },
      {
        title: 'Forks',
        count: repository.forkCount,
      },
      {
        title: 'Stargazers',
        count: repository.stargazerCount,
      },
    ],
    description: repository.description,
    homepageUrl: repository.homepageUrl,
    topics: parseRepoTopics(repository.topics?.nodes),
    languages: parseRepoLanguages(repository.languages?.nodes),
  };
};

const parseRepoTopics = (topics: Topic): string[] => {
  if (!topics) {
    return [];
  }

  return topics.reduce((acc: string[], topic) => {
    if (topic?.topic) {
      acc.push(topic?.topic.name);
    }
    return acc;
  }, []);
};

const parseRepoLanguages = (
  languages: (LanguageNode | null)[] | null | undefined,
): Language[] => {
  if (!languages) {
    return [];
  }

  return languages.reduce((acc: Language[], language) => {
    if (language) {
      acc.push({ name: language.name, color: language.color! });
    }

    return acc;
  }, []);
};
