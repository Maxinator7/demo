import { createSlice } from "@reduxjs/toolkit";
import data from "../Assets/Events";
import groups from "../Assets/Groups";
import stories from "../Assets/Stories";

const initialState = {
  events: data,
  Groups: groups,
  meetupStories: stories,
};

const dataSlice = createSlice({
  name: "MeetupData",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
