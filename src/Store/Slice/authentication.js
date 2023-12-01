import { createSlice, configureStore } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    usersList: [],
  },
  reducers: {
    registerUser: (state, { payload }) => {
      const { mobileUser, passwordUser } = payload;

      return {
        ...state,
        usersList: [
          ...state.usersList,
          {
            id: Math.floor(Math.random() * 1000),
            mobile: mobileUser,
            password: passwordUser,
          },
        ],
      };
    },
  },
});

export const { registerUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
