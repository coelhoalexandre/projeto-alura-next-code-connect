"use client";

import { useRef } from "react";
import { Modal } from "../Modal";

import styles from "./replymodal.module.css";
import { Textarea } from "../Textarea";
import { SubmitButton } from "../SubmitButton";
import { Comment } from "../Comment";
import { postReply } from "@/actions";
import IComment from "@/interface/Comment";
import IPost from "@/interface/Post";

export const ReplyModal = ({
  comment,
  post,
}: {
  comment: IComment;
  post: IPost;
}) => {
  const modalRef = useRef<any>(null);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const action = postReply.bind(null, post, comment);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={styles.btn} onClick={openModal}>
        Responder
      </button>
    </>
  );
};
