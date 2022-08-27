import { NexusGenFieldTypes } from '../nexus-typegen';

export type Post = NexusGenFieldTypes['Post'];

export interface Db {
  posts: Post[];
};

export const db: Db = {
  posts: [],
};