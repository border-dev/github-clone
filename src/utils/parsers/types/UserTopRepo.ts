export interface UserTopRepo {
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
