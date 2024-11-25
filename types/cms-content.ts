export interface Media {
  id: number;
  attributes: { url: string };
}

export interface SEO {
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
}
