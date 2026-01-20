import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/app/providers/StoreProvider/config/store';
import type { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
