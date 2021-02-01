export interface Chat {
  selectedChatId: string;
  recentMessages: Message[];
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
  profilePicture: string | null;
}

export interface Message {
  senderId: string;
  content: string;
}
