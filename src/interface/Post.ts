import IAuthor from "./Author";
import IComment from "./Comment";

export default interface IPost {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: Date;
  upadatedAt: Date;
  authorId: number;
  author: IAuthor;
  likes: number;
  comments: IComment[];
}
