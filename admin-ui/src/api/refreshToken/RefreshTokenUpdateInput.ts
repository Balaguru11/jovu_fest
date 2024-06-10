import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RefreshTokenUpdateInput = {
  device?: string | null;
  expiryDate?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
