import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const manageStore = configureStore({
  reducer: {},
});

export type manageState = ReturnType<typeof manageStore.getState>;
export type manageDispatch = typeof manageStore.dispatch;

export const useManageDispatch: () => manageState = useDispatch;
export const useManageSelector: TypedUseSelectorHook<manageDispatch> =
  useSelector;
