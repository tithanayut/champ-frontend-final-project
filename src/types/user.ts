export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface Profile {
  profile: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}
