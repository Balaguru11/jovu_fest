import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const GroomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Age" source="age" />
        <SelectInput
          source="diet"
          label="Diet"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="drinkingHabits"
          label="DrinkingHabits"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="EducationLevel" source="educationLevel" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Ethnicity" source="ethnicity" />
        <TextInput label="FamilyDetails" multiline source="familyDetails" />
        <NumberInput label="Height" source="height" />
        <TextInput label="Hobbies" multiline source="hobbies" />
        <TextInput label="Interests" multiline source="interests" />
        <TextInput label="LanguageSpoken" multiline source="languageSpoken" />
        <TextInput label="Location" source="location" />
        <SelectInput
          source="maritalStatus"
          label="MaritalStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Occupation" source="occupation" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <TextInput label="Religion" source="religion" />
        <SelectInput
          source="smokingHabits"
          label="SmokingHabits"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
