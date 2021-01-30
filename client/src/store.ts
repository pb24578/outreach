import { createMiddleware, createReducer } from 'async-selector-kit';
import { applyMiddleware, createStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as LoginReducer } from './pages/login/reducer';

const rootReducer = combineReducers({
  AsyncSelectorKit: createReducer(),
  login: LoginReducer,
});

const middlewares = [createMiddleware()];

export type IState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
