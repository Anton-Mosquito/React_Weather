import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Weather } from '@/types/domain/weather';
import { initialState } from '@/shared/const';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDataCity(state, action: PayloadAction<Weather[] | undefined>) {
      state.dataCity = action.payload;
    },
    setDataPosition(state, action: PayloadAction<Weather | undefined>) {
      state.dataPosition = action.payload;
    },
    setLoadingCards(state, action: PayloadAction<boolean>) {
      state.loadingCards = action.payload;
    },
    setLoadingMain(state, action: PayloadAction<boolean>) {
      state.loadingMain = action.payload;
    },
    setTypeRequest(state, action: PayloadAction<string>) {
      state.typeRequest = action.payload;
    },
    setTrueInfo(state, action: PayloadAction<boolean>) {
      state.trueInfo = action.payload;
    },
  },
});

export const {
  setDataCity,
  setDataPosition,
  setLoadingCards,
  setLoadingMain,
  setTypeRequest,
  setTrueInfo,
} = appSlice.actions;

export default appSlice.reducer;
