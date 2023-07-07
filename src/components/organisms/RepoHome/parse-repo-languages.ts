import { Language as LanguageNode } from '@lib/generated/graphql';

export type Language = {
  name: string;
  color: string;
};

export const parseRepoLanguages = (
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
