import { createSlice } from "@reduxjs/toolkit";
import data from "../Assets/Events";
import groups from "../Assets/Groups";
import stories from "../Assets/Stories";

const initialState = {
  events: data,
  Groups: groups,
  meetupStories: stories,
  // EmailAddress : "",
  // Password: "",
  searchedEvent: "",
  SearchedLocation: "",
};

const dataSlice = createSlice({
  name: "MeetupData",
  initialState,
  reducers: {
    handleSearchEvent: (state, { payload }) => {
      console.log(payload);
      state[payload.name] = payload.value;
    },

    handleSearchLocation: (state, { payload }) => {
      // console.log(action);
      console.log(payload);
      // action.searchedEvent=
    },
  },
});
export const { handleSearchEvent, handleSearchLocation } = dataSlice.actions;
export default dataSlice.reducer;
