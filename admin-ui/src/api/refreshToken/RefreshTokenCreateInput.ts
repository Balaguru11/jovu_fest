import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RefreshTokenCreateInput = {
  device?: string | null;
  expiryDate?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
