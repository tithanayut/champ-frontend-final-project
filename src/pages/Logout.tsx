import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "store/store";
import { logout } from "store/auth";

export default function Logout() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(logout());
    history.push("/");
  }, [dispatch, history]);

  return null;
}
