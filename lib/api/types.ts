export type Maybe<T> = T | null;

//Types for interfacing with api

export type Menu = {
  title: string;
  path: string;
};

export type Video = {
  title: string;
  description: string;
  user_id: string;
  id: string;
  video_url: string;
  num_comments: number;
  createdAt: string;
};

export type Comment = {
  created_at: string;
  content: string;
  user_id: string;
  video_id: string;
  id: string;
};
