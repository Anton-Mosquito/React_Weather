import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Weather } from '@/types/domain/weather';

interface AppState {
  dataCity?: Weather[];
  dataPosition?: Weather | undefined;
  loadingCards: boolean;
  loadingMain: boolean;
  typeRequset: string;
  trueInfo: boolean;
}

const initialState: AppState = {
  dataCity: undefined,
  dataPosition: undefined,
  loadingCards: false,
  loadingMain: false,
  typeRequset: '',
  trueInfo: true,
};

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
      state.typeRequset = action.payload;
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
