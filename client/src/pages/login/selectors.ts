import { IState } from '../../store';

export const getAuthState = (state: IState) => state.login.authState;
export const getUser = (state: IState) => state.login.user;
export const getGroups = (state: IState) => state.login.groups;
export const isInvestor = (state: IState) => state.login.investor;
