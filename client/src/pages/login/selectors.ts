import { createSelector } from 'async-selector-kit';
import { IState } from '../../store';
import { Groups } from '../../shared/constants';

export const getAuthState = (state: IState) => state.login.authState;
export const getUser = (state: IState) => state.login.user;
export const getGroups = (state: IState) => state.login.groups;

export const isInvestor = createSelector(getGroups, (groups) => groups.includes(Groups.INVESTOR));
