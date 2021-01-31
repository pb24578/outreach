export interface ChatRoom {
  businessOwner: ChatParticipant;
  investor: ChatParticipant;
  messages: { items: Message[] };
}

interface ChatParticipant {
  firstName: string;
  id: string;
  lastName: string;
}

interface Message {
  senderId: string;
  content: string;
}
