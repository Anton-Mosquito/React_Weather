import {
  type ReducersMapObject,
  configureStore,
  type Reducer,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  type ThunkExtraArg,
  type StateSchema,
  type ReduxStoreWithManager,
} from './StateSchema';
import { createReducerManager } from './reducerManager';
import appReducer from '@/store/slices/appSlice';
import { weatherApi } from '@/store/services/weatherApi.service';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    app: appReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {};

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: import.meta.env.DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(weatherApi.middleware),
  });

  (store as ReduxStoreWithManager).reducerManager = reducerManager;

  setupListeners(store.dispatch);

  return store;
}

//export type RootState = ReturnType<typeof createReduxStore.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
