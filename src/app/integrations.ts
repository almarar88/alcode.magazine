import data from '../generated/store.json';
export const INT = (data as any).integrations as { analytics: { code: string }; flags: { analytics: boolean } };
export const FLAGS = INT.flags;
