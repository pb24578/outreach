import { createSelector } from 'async-selector-kit';
import { IState } from '../../../store';
import { getUserData } from '../../../pages/login';

export const getSelectedChatId = (state: IState) => state.chat.selectedChatId;
export const getRecentMessages = (state: IState) => state.chat.recentMessages;

// eslint-disable-next-line max-len
export const getChatRoom = createSelector([getSelectedChatId, getUserData], (selectedChatId, userData) => {
  if (userData) {
    const room = userData.chatRooms.items.find((chatRoom) => chatRoom.id === selectedChatId);
    return room || null;
  }
  return null;
});
