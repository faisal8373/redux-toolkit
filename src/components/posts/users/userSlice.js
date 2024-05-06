import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Faisal" },
  { id: "1", name: "Javed" },
  { id: "2", name: "Ahmed" },
  { id: "3", name: "Hamza" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducer: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
