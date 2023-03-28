import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import emoteReducer from "./emoteSlice";
import processReducer from "./processSlice";

export const taskStore = configureStore({
  reducer: {
    emote: emoteReducer,
    process: processReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type EmoteState = ReturnType<typeof taskStore.getState>;
export type EmoteDispatch = typeof taskStore.dispatch;

export const useEmoteDispatch: () => EmoteDispatch = useDispatch;
export const useEmoteSelector: TypedUseSelectorHook<EmoteState> = useSelector;
