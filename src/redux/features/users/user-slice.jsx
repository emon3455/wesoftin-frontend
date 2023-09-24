import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = "user_data";

const loadUserDataFromLocalStorage = () => {
  const storedUserData = localStorage.getItem(localStorageKey);
  if (storedUserData) {
    return JSON.parse(storedUserData);
  }
  return {};
};

export const singleUserSlice = createSlice({
  name: "singleUserSlice",
  initialState: { user: loadUserDataFromLocalStorage() },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(localStorageKey, JSON.stringify(action.payload));
    },
  },
});

export const { setUserData } = singleUserSlice.actions;
export default singleUserSlice.reducer;
