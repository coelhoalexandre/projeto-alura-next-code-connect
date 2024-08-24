import IAuthor from "./Author";

export default interface IComment {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  postId: number;
  parentId: number | null;
  author: IAuthor;
}

export type CommentWithChildren = IComment & { children: IComment[] };
