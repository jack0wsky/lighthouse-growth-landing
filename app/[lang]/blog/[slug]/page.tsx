import { CmsApiClient } from "@/api-client";
import { Languages } from "@/shared/dictionaries/languages";
import { BlogPostPage } from "@/views/Blog/BlogPost";

const getData = async (slug: string, locale: Languages) => {
  const api = new CmsApiClient();
  return api.getBlogPostBySlug(slug, locale);
};

export default async function Post({
  params,
}: {
  params: { lang: Languages; slug: string };
}) {
  const post = await getData(params.slug, params.lang);

  return <BlogPostPage post={post} lang={params.lang} />;
}
