import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
