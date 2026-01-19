import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import type { AppContext } from '../types/appContext';
import {
  setDataCity,
  setDataPosition,
  setLoadingCards,
  setLoadingMain,
  setTypeRequest,
  setTrueInfo,
} from '@/store/slices/appSlice';

// Hook that mirrors the previous `AppContext` shape but backed by Redux.
export const useAppContext = (): AppContext => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.app);

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
    typeRequset: state.typeRequset,
    trueInfo: state.trueInfo,
  };
};

export default useAppContext;
