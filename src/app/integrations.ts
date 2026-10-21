import data from '../generated/posts.json';
export const INT = (data as any).integrations as {
  accounts: { url: string; anonKey: string; google: boolean }; newsletter: { username: string };
  contact: { accessKey: string }; analytics: { code: string };
  flags: { accounts: boolean; newsletter: boolean; contact: boolean; analytics: boolean };
};
export const FLAGS = INT.flags;
