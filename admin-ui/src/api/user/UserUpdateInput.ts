import { RefreshTokenUpdateManyWithoutUsersInput } from "./RefreshTokenUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SubscriptionUpdateManyWithoutUsersInput } from "./SubscriptionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  refreshTokens?: RefreshTokenUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  subscriptions?: SubscriptionUpdateManyWithoutUsersInput;
  username?: string;
};
