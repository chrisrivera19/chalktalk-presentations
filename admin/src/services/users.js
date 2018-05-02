<<<<<<< HEAD
import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  RadioButtonGroupInput,
  TextInput,
  SimpleForm
} from "admin-on-rest";
=======
import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton,
    DisabledInput, TextInput, SimpleForm } from 'admin-on-rest';
import TextFields from 'material-ui/TextField';
>>>>>>> 2681619847f7b5e28eee2ce58d65131b85a2913f

export const UsersList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="Name" source="name" />
      <TextField label="E-mail" source="email" />
      <TextField label="Role" source="roles" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UsersEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="_id" />
      <TextInput label="Name" source="name" />
      <TextInput label="E-mail" source="email" type="email" />
        <RadioButtonGroupInput
          label="Role"
          source="roles"
          choices={[{ id: "user", name: "User" }, { id: "admin", name: "Admin" }]}
        />

      <TextInput label="Password" source="password" type="password"/>
      <label>Note: Always retype your password when editing!</label>
    </SimpleForm>
  </Edit>
);

export const UsersCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" />
      <TextInput label="E-mail" source="email" type="email" />
      <RadioButtonGroupInput
        label="Role"
        source="roles"
        choices={[{ id: "user", name: "User" }, { id: "admin", name: "Admin" }]}
      />
    <TextInput label="Password" source="password" type="password"/>
    </SimpleForm>
  </Create>
);
