export type Tag = {
  id: number;
  name: string;
}

export type Category = {
  id: string
  name: string
  background: string
  news: News[]
}

export type News = {
  id: string
  title: string
  content: string
  createdAt: string
  image: string
  category: Category
  comments: Comment[]
  tag: Tag[]
  thumbnail: string
}

export type Card = {
  id?: string;
  image: string;
  title?: string;
  content?: string;
  category: Category;
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