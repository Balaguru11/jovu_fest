import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GroomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Diet" source="diet" />
        <TextField label="DrinkingHabits" source="drinkingHabits" />
        <TextField label="EducationLevel" source="educationLevel" />
        <TextField label="Email" source="email" />
        <TextField label="Ethnicity" source="ethnicity" />
        <TextField label="FamilyDetails" source="familyDetails" />
        <TextField label="Height" source="height" />
        <TextField label="Hobbies" source="hobbies" />
        <TextField label="ID" source="id" />
        <TextField label="Interests" source="interests" />
        <TextField label="LanguageSpoken" source="languageSpoken" />
        <TextField label="Location" source="location" />
        <TextField label="MaritalStatus" source="maritalStatus" />
        <TextField label="Name" source="name" />
        <TextField label="Occupation" source="occupation" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="Religion" source="religion" />
        <TextField label="SmokingHabits" source="smokingHabits" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Weight" source="weight" />
      </SimpleShowLayout>
    </Show>
  );
};
