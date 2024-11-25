import { BlogPage } from "@/views/Blog/BlogPage";
import { Languages } from "@/shared/dictionaries/languages";
import { CmsApiClient } from "@/api-client";

const getData = async (locale: Languages) => {
  const api = new CmsApiClient();
  const response = await api.getBlogPosts(locale);

  return {
    posts: response || [],
  };
};

export default async function Blog({
  params,
}: {
  params: { lang: Languages };
}) {
  const { posts } = await getData(params.lang);

  return <BlogPage posts={posts} />;
}
