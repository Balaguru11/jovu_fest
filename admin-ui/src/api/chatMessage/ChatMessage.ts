export type ChatMessage = {
  createdAt: Date;
  id: string;
  message: string | null;
  receiver: string | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
