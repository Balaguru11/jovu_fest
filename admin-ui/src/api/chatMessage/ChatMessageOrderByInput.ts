import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  receiver?: SortOrder;
  sender?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
