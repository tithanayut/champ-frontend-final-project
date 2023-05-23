import { api } from "./api";
import { AllArticles, SingleArticle } from "types/article";
import { FeedType } from "types/feed";

export const articleApi = api.injectEndpoints({
  endpoints: build => ({
    getArticles: build.query<AllArticles, FeedType>({
      query: feedType => (feedType === FeedType.Global ? "articles" : "articles/feed"),
      providesTags: () => ["Articles"],
    }),
    getArticlesByUsername: build.query<AllArticles, string>({
      query: username => `articles?author=${username}`,
      providesTags: () => ["Articles"],
    }),
    getArticle: build.query<SingleArticle, string>({
      query: slug => `articles/${slug}`,
      providesTags: slug => [{ type: "Articles", slug }],
    }),
    favoriteArticle: build.mutation<SingleArticle, string>({
      query: slug => ({
        url: `articles/${slug}/favorite`,
        method: "POST",
      }),
      invalidatesTags: () => ["Articles"],
    }),
    unfavoriteArticle: build.mutation<SingleArticle, string>({
      query: slug => ({
        url: `articles/${slug}/favorite`,
        method: "DELETE",
      }),
      invalidatesTags: () => ["Articles"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useGetArticlesByUsernameQuery,
  useFavoriteArticleMutation,
  useUnfavoriteArticleMutation,
} = articleApi;
