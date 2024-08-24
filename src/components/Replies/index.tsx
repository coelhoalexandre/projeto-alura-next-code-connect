"use client";

import { useEffect, useState } from "react";
import styles from "./replies.module.css";
import IComment, { CommentWithChildren } from "@/interface/Comment";
import { Comment } from "../Comment";
import { ReplyModal } from "../ModalReply";
import IPost from "@/interface/Post";

export const Replies = ({
  post,
  comment,
}: {
  post: IPost;
  comment: CommentWithChildren;
}) => {
  const [showReplies, setShowReplies] = useState(false);

  const [replies, setReplies] = useState<IComment[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/comment/${comment.id}/replies`);
      const data = await response.json();
      setReplies(data);
    }
    if (showReplies) {
      fetchData();
    }
  }, [comment.id, showReplies]);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.btn}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
        {showReplies && (
          <ul>
            {replies.map((reply) => (
              <li key={reply.id}>
                <Comment comment={reply} />
                <ReplyModal post={post} comment={reply} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
