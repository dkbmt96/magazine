export type Tag = {
  id: number;
  name: string;
}

export type Card = {
  id?: string;
  url: string;
  title?: string;
  content?: string;
  category: string;
  updateAt?: string;
}