import { RefreshToken } from "../refreshToken/RefreshToken";
import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  refreshTokens?: Array<RefreshToken>;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
};
