import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChatMessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="receiver" source="receiver" />
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
