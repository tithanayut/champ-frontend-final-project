import { User } from "types/user";

export const getUser = async (token: string): Promise<User | null> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
    headers: { Authorization: `Token: ${token}` },
  });
  if (!response.ok) return null;
  if (response.status !== 200) return null;

  const data = await response.json();
  return data.user;
};
