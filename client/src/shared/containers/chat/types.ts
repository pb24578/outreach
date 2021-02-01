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
  location: string;
  profilePicture: string;
}

interface Message {
  senderId: string;
  content: string;
}
