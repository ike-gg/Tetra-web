import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LIMIT = 262144;

interface EmotePayload {
  name: string;
  guildId: string;
  guildName: string;
  emote: Buffer;
  animated: boolean;
  frames: number;
  delays: number[];
}

export interface EmoteState {
  name?: string;
  guildId?: string;
  guildName?: string;
  originalEmote?: Buffer;
  modifiedEmote?: Buffer;
  animated?: boolean;
  size?: number;
  hasExceededLimit?: boolean;
  LIMIT: 262144;
  frames?: number;
  delays?: number[];
}

const initialState: EmoteState = {
  LIMIT: 262144,
};

export const emoteSlice = createSlice({
  name: "emote",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<EmotePayload>) => {
      const { animated, emote, guildId, name, delays, frames, guildName } =
        action.payload;
      state.originalEmote = emote;
      state.modifiedEmote = emote;
      state.animated = animated;
      state.guildId = guildId;
      state.name = name;
      state.size = emote.byteLength;
      state.hasExceededLimit = emote.byteLength + 1000 > LIMIT;
      state.delays = delays;
      state.frames = frames;
      state.guildName = guildName;
    },
    updateBuffer: (state, action: PayloadAction<Buffer>) => {
      state.modifiedEmote = action.payload;
      state.size = action.payload.byteLength;
      state.hasExceededLimit = action.payload.byteLength > LIMIT;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const EmoteActions = emoteSlice.actions;

export default emoteSlice.reducer;
