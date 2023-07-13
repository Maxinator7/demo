import { createSlice } from "@reduxjs/toolkit";
import data from "../Assets/Events";
import groups from "../Assets/Groups";
import stories from "../Assets/Stories";

const initialState = {
  events: data,
  Groups: groups,
  meetupStories: stories,
  user: "",
  token: "",
  searchedEvent: "",
  SearchedLocation: "",
};

const dataSlice = createSlice({
  name: "MeetupData",
  initialState,
  reducers: {
    handleSearchEvent: (state, { payload }) => {
      state[payload.name] = payload.value;
    },

    handleLogin: (state, { payload }) => {
      state["user"] = payload;
    },
  },
});
export const { handleSearchEvent, handleLogin } = dataSlice.actions;
export default dataSlice.reducer;
