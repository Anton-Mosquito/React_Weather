import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import type { IWeatherState } from '@/types';
import {
  setDataCity,
  setDataPosition,
  setLoadingCards,
  setLoadingMain,
  setTypeRequest,
  setTrueInfo,
} from '@/store/slices/appSlice';

export function useStore(): IWeatherState {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.app);

  const updateData = useCallback(
    (value: string) => dispatch(setTypeRequest(value)),
    [dispatch]
  );

  const updateWeatherCards = useCallback(
    (value: string) => dispatch(setTypeRequest(value)),
    [dispatch]
  );

  return {
    dataCity: state.dataCity,
    dataPosition: state.dataPosition,
    updateData,
    loadingCards: state.loadingCards,
    updateWeatherCards,
    loadingMain: state.loadingMain,
    typeRequest: state.typeRequest,
    trueInfo: state.trueInfo,
  };
}
