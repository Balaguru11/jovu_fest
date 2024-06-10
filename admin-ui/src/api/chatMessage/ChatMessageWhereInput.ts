import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatMessageWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  receiver?: StringNullableFilter;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
