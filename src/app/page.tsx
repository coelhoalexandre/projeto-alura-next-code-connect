import { CardPost } from "@/components/CardPost";
import IPost from "@/interface/Post";
import logger from "@/logger";
import Link from "next/link";
import styles from "./page.module.css";
import db from "../../prisma/db";

async function getAllPosts(page: number, searchTerm: string) {
  // const response = await fetch(
  //   `http://localhost:3042/posts?_page=${page}&_per_page=6`
  // );
  // if (!response.ok) {
  //   logger.error("Ops, alguma coisa correu mal");
  //   return [];
  // }
  // logger.info("Posts obtidos com sucesso!");
  // return response.json();

  try {
    const where: { [key: string]: {} } = {};

    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    const perPage = 4;
    const skip = (page - 1) * perPage;

    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / perPage);

    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { id: "desc" },
      include: {
        author: true,
        comments: {
          include: {
            author: true,
          },
        },
      },
    });

    return { data: posts, prev, next };
  } catch (error) {
    logger.error("Falha ao obter posts", { error });
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string; q: string };
}) {
  const currentPage = parseInt(searchParams.page) || 1;
  const searchTerm = searchParams.q;
  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(currentPage, searchTerm);
  return (
    <main className={styles.grid}>
      {posts.map((post: IPost) => (
        <CardPost post={post} key={post.id}></CardPost>
      ))}
      <div className={styles.links}>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: searchTerm } }}>
            Página anterior
          </Link>
        )}
        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: searchTerm } }}>
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}
