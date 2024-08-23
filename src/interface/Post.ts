import Author from "./Author";

export default interface Post {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: Date;
  upadatedAt: Date;
  authorId: number;
  author: Author;
}
