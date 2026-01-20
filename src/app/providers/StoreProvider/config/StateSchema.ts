import {
  type ReducersMapObject,
  type EnhancedStore,
  type Action,
  type Reducer,
} from '@reduxjs/toolkit';
import { type IAppState } from '@/types';
import { type weatherApi } from '@/store/services/weatherApi.service';

export interface StateSchema {
  app: IAppState;
  [weatherApi.reducerPath]: ReturnType<typeof weatherApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  // api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
