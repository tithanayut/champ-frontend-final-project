import { api } from "./api";
import { Tags } from "types/tag";

export const articleApi = api.injectEndpoints({
  endpoints: build => ({
    getTags: build.query<Tags, void>({
      query: () => "tags",
      providesTags: () => ["Tags"],
    }),
  }),
});

export const { useGetTagsQuery } = articleApi;
