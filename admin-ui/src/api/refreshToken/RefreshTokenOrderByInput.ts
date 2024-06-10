import { SortOrder } from "../../util/SortOrder";

export type RefreshTokenOrderByInput = {
  createdAt?: SortOrder;
  device?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
