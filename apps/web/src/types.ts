export type Tag = {
  id: number;
  name: string;
}

export type Category = {
  id: String
  name: String
  background: String
  news: News[]
}

export type News = {
  id: String
  title: String
  content: String
  createdAt: String
  image: String
  category: Category
  comments: Comment[]
  tag: Tag[]
  thumbnail: String
}

export type Card = {
  id?: string;
  image: string;
  title?: string;
  content?: string;
  category: string;
  createdAt?: string;
}

type User = {
  avatar: string;
  name: string
}

export type Comment = {
  id: string,
  author: User,
  content: string,
  createdAt?: string;
};