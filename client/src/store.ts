import { createMiddleware, createReducer } from 'async-selector-kit';
import { applyMiddleware, createStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as loginReducer } from './pages/login/reducer';
import { reducer as chatReducer } from './pages/chat/reducer';

const rootReducer = combineReducers({
  AsyncSelectorKit: createReducer(),
  login: loginReducer,
  chat: chatReducer,
});

const middlewares = [createMiddleware()];

export type IState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
