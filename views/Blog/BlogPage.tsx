import { BlogPost } from "@/types/cms-content";
import { DataWrapper } from "@/api-client";
import { format } from "date-fns";
import Link from "next/link";
import { Routes } from "@/views/routes";

interface BlogPageProps {
  posts: DataWrapper<BlogPost>[];
}

export const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <div className="min-h-screen w-full">
      <section className="mt-20 layout mx-auto flex flex-col">
        <h1 className="text-h1">Blog</h1>

        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {posts.map((post) => {
            const url = `/${post.attributes.locale}${Routes.Blog}/${post.attributes.slug}`;

            return (
              <li key={post.id} className="border-b border-gray-100 pb-3">
                <Link href={url}>
                  <div className="w-full h-[200px] bg-gray-200" />
                  <p className="text-xs font-medium opacity-50 mt-2">
                    {format(
                      new Date(post.attributes.publishedAt),
                      "dd.MM.yyyy"
                    )}
                  </p>
                  <h2 className="text-2xl mt-2">{post.attributes.title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
