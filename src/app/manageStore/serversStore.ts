import { API_URL } from "@/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ServersState {
  guilds: {
    id: string;
    name: string;
    icon: string;
  }[];
}

export const fetchGuilds = createAsyncThunk("emote/fetchGuilds", async () => {
  const responseGuilds = await fetch(`${API_URL}/task/guilds`, {
    credentials: "include",
  });
  const guilds = await responseGuilds.json();
  return guilds;
});

const initialState: ServersState = {
  guilds: [],
};

export const serversState = createSlice({
  name: "emote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGuilds.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export const EmoteActions = serversState.actions;
export default serversState.reducer;
