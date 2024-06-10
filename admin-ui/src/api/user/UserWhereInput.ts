import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RefreshTokenListRelationFilter } from "../refreshToken/RefreshTokenListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  refreshTokens?: RefreshTokenListRelationFilter;
  subscriptions?: SubscriptionListRelationFilter;
  username?: StringFilter;
};
