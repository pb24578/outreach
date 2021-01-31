export interface Chat {
  selectedChatId: string;
}

export interface ChatRoom {
  id: string;
  businessOwner: ChatParticipant;
  investor: ChatParticipant;
  messages: { items: Message[] };
}

interface ChatParticipant {
  id: string;
  firstName: string;
  lastName: string;
}

interface Message {
  senderId: string;
  content: string;
}
