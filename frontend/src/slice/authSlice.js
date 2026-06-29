import { createSlice } from "@reduxjs/toolkit";

const unparsedUser = localStorage.getItem("user");
const storedUser = unparsedUser && unparsedUser !== 'undefined' ? JSON.parse(unparsedUser) : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser,
    isAuthenticated: !!storedUser,
  },

  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload)
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
    },
  },
});

export const { loginUser, logout } = authSlice.actions;
export default authSlice.reducer;
