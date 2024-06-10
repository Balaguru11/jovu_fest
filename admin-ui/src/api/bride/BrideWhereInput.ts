import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BrideWhereInput = {
  age?: IntNullableFilter;
  diet?: "Option1";
  drinkingHabits?: "Option1";
  educationLevel?: StringNullableFilter;
  email?: StringNullableFilter;
  ethnicity?: StringNullableFilter;
  familyDetails?: StringNullableFilter;
  height?: FloatNullableFilter;
  hobbies?: StringNullableFilter;
  id?: StringFilter;
  interests?: StringNullableFilter;
  languageSpoken?: StringNullableFilter;
  location?: StringNullableFilter;
  maritalStatus?: "Option1";
  name?: StringNullableFilter;
  occupation?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  religion?: StringNullableFilter;
  smokingHabits?: "Option1";
  weight?: FloatNullableFilter;
};
