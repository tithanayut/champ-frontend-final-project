import { login as loginAction } from "store/auth";
import { useAppDispatch } from "store/store";

export default function useLogin() {
  const dispatch = useAppDispatch();

  const login = async (email: string, password: string): Promise<boolean> => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: { email, password } }),
    });
    if (!response.ok) return false;
    if (response.status !== 200) return false;

    const data = await response.json();
    localStorage.setItem("token", data.user.token);
    dispatch(loginAction(data.user));
    return true;
  };

  return { login };
}
