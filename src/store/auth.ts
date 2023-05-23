import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "types/user";

interface AuthSlice {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
} as AuthSlice;

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_, action: PayloadAction<User>) => ({
      user: action.payload,
      token: action.payload.token,
      isAuthenticated: true,
    }),
    logout: () => initialState,
  },
});

export const { login, logout } = slice.actions;
export default slice.reducer;
