import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CropProperty = [[number, number], [number, number]];

export type FittingProperty = "cover" | "contain" | "fill";

export interface ProcessSlice {
  lossy?: number;
  colors?: number;
  scale?: number;
  crop?: string;
  cut?: [[number, number], [number, number]];
  fitting?: FittingProperty;
}

const initialState: ProcessSlice = {};

export const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    updateLossy: (state, action: PayloadAction<number>) => {
      state.lossy = action.payload;
    },
    removeLossy: (state) => {
      state.lossy = undefined;
    },
    updateColors: (state, action: PayloadAction<number>) => {
      state.colors = action.payload;
    },
    removeColors: (state) => {
      state.colors = undefined;
    },
    updateScale: (state, action: PayloadAction<number>) => {
      state.scale = action.payload / 100;
    },
    removeScale: (state) => {
      state.scale = undefined;
    },
    updateCrop: (state, action: PayloadAction<CropProperty>) => {
      const [[x1, y1], [x2, y2]] = action.payload;
      state.crop = `${x1},${y1}-${x2},${y2}`;
    },
    removeCrop: (state) => {
      state.crop = undefined;
    },
    updateCut: (state, action: PayloadAction<CropProperty>) => {
      state.cut = action.payload;
    },
    removeCut: (state) => {
      state.cut = undefined;
    },
    updateFitting: (state, action: PayloadAction<FittingProperty>) => {
      state.fitting = action.payload;
    },
    removeFitting: (state) => {
      state.fitting = undefined;
    },
  },
});

export const ProcessActions = processSlice.actions;

export default processSlice.reducer;
