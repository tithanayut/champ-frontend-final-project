import { useEffect } from "react";
import { useAppDispatch } from "store/store";
import { api } from "store/api/api";
import { login } from "store/auth";
import { getUser } from "utils/getUser";

export default function useApp() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const bootstrap = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const user = await getUser(token);
        if (user) {
          dispatch(login(user));
          dispatch(api.util.resetApiState());
        }
      }
    };
    bootstrap();
  }, [dispatch]);
}
