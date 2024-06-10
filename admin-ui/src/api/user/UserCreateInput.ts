import { RefreshTokenCreateNestedManyWithoutUsersInput } from "./RefreshTokenCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  refreshTokens?: RefreshTokenCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
  username: string;
};
