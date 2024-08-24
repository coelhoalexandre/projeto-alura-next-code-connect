"use server";

import IPost from "@/interface/Post";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";
import IComment from "@/interface/Comment";

export async function incrementThumbsUp(post: IPost) {
  await db.post.update({
    where: {
      id: post.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });

  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

export async function postComment(post: IPost, formData: any) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  if (author) {
    await db.comment.create({
      data: {
        text: formData.get("text"),
        authorId: author?.id,
        postId: post.id,
      },
    });
  }

  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

export async function postReply(post: IPost, parent: IComment, formData: any) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  if (author) {
    await db.comment.create({
      data: {
        text: formData.get("text"),
        authorId: author?.id,
        postId: post.id,
        parentId: parent.parentId ?? parent.id,
      },
    });
  }

  revalidatePath(`/${post.slug}`);
}
