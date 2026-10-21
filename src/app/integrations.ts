import data from '../generated/posts.json';
export const INT = (data as any).integrations as {
  cms: { repo: string; oauthBaseUrl: string }; newsletter: { username: string };
  comments: { repo: string; repoId: string; category: string; categoryId: string };
  contact: { accessKey: string }; analytics: { code: string };
  flags: { cms: boolean; newsletter: boolean; comments: boolean; contact: boolean; analytics: boolean };
};
export const FLAGS = INT.flags;
