export interface Article {
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
  author: ArticleAuthor;
}

export interface ArticleAuthor {
  bio: string;
  following: boolean;
  image: string;
  username: string;
}

export interface AllArticles {
  articles: Article[];
  articlesCount: number;
}

export interface SingleArticle {
  article: Article;
}
