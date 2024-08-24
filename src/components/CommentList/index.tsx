import { Replies } from "../Replies";

import styles from "./commentlist.module.css";
import IComment, { CommentWithChildren } from "@/interface/Comment";
import { Comment } from "../Comment";
import { ReplyModal } from "../ModalReply";
import IPost from "@/interface/Post";

export const CommentList = ({
  post,
  comments,
}: {
  post: IPost;
  comments: CommentWithChildren[];
}) => {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />

            <ReplyModal post={post} comment={comment} />
            <Replies post={post} comment={comment} />
          </li>
        ))}
      </ul>
    </section>
  );
};
