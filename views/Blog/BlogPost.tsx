import Link from "next/link";
import { Routes } from "@/views/routes";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Languages } from "@/shared/dictionaries/languages";
import { BlogPost } from "@/types/cms-content";
import { DataWrapper } from "@/api-client";

interface BlogPostProps {
  lang: Languages;
  post: DataWrapper<BlogPost>;
}

export const BlogPostPage = ({ lang, post }: BlogPostProps) => {
  return (
    <div className="mt-40 min-h-screen w-full">
      <section className="max-w-[650px] w-full mx-auto flex flex-col">
        <Link
          href={`/${lang}${Routes.Blog}`}
          className="underline text-sm text-gray-600"
        >
          Back to blog
        </Link>

        <h1 className="text-h1 my-3">{post.attributes.title}</h1>
        <p>{format(new Date(post.attributes.publishedAt), "dd.MM.yyyy")}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="my-10">
          {post.attributes.content}
        </ReactMarkdown>
      </section>
    </div>
  );
};
