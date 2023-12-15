import { useDispatch } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
  ThunkDispatch
} from '@reduxjs/toolkit';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory()
});

export const rootReducer = combineReducers({
  router: routerReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(routerMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export const browserHistory = createReduxHistory(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type UseAppDispatch = ThunkDispatch<RootState, null, AnyAction>;

export const useAppDispatch = (): UseAppDispatch => useDispatch<AppDispatch>();
