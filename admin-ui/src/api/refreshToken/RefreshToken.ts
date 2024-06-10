import { User } from "../user/User";

export type RefreshToken = {
  createdAt: Date;
  device: string | null;
  expiryDate: Date | null;
  id: string;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
};
