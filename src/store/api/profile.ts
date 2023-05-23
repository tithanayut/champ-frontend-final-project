import { Profile } from "types/user";
import { api } from "./api";

export const profileApi = api.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<Profile, string>({
      query: username => `profiles/${username}`,
      providesTags: () => ["Profile"],
    }),
    followUser: build.mutation<Profile, string>({
      query: username => ({
        url: `profiles/${username}/follow`,
        method: "POST",
      }),
      invalidatesTags: () => ["Profile", "Articles"],
    }),
    unfollowUser: build.mutation<Profile, string>({
      query: username => ({
        url: `profiles/${username}/follow`,
        method: "DELETE",
      }),
      invalidatesTags: () => ["Profile", "Articles"],
    }),
  }),
});

export const { useGetProfileQuery, useFollowUserMutation, useUnfollowUserMutation } = profileApi;
