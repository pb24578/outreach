import { IState } from '../../store';

export const getAuthState = (state: IState) => state.login.authState;
export const getUser = (state: IState) => state.login.user;
