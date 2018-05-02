<<<<<<< HEAD
import React from "react";
import {
  List,
  Edit,
  CommentGrid,
  Create,
  Datagrid,
  TextField,
  EditButton,
  LongTextInput,
  DisabledInput,
  ImageField,
  ImageInput,
  TextInput,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  NumberInput,
  SelectInput
} from "admin-on-rest";

import {
  Card,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  CardActions
} from "material-ui/Card";

export const SlidesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label="Presentation"
        source="presentation_id"
        defaulValue={props.presentation_id}
        reference="presentations"
        allowEmpty
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <NumberInput label="Order" source="order" />
      <TextInput label="Title" source="title" />
      <TextInput label="Slide Caption" source="caption" />
      <TextInput source="image" type="url" label="Backgroud image" />
    </SimpleForm>
  </Create>
);

const img = "img";

export const SlidesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="_id" />
      <ReferenceInput
        label="Presentation"
        source="presentation_id"
        reference="presentations"
        allowEmpty
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <NumberInput label="Order" source="order" />
      <LongTextInput label="Title" source="title" />
      <LongTextInput label="Slide Caption" source="caption" />
      <TextInput source="image" label="Backgroud image" type="url" />
      <ImageField source="image" />
    </SimpleForm>
  </Edit>
);

const cardStyle = {
  width: 300,
  margin: ".5em",
  display: "inline-block",
  verticalAlign: "top"
};

const SlideGrid = ({ ids, data, basePath }) => (
  <div style={{ margin: "2em", paddingTop: "3em" }}>
    {ids.map(id => (
      <Card key={id} style={cardStyle}>
        <CardMedia
          overlay={
            <CardTitle

          style= {{ height: 70}}
              title={<TextField record={data[id]} source="title" allowEmpty />}
              subtitle={<TextField record={data[id]} source="caption" allowEmpty />}
            />
          }
        >
          <ImageField record={data[id]} source="image"  />
        </CardMedia>
        <CardText>
          <ReferenceField
            label="Presentation"
            resource="presentations"
            record={data[id]}
            source="presentation_id"
            reference="presentations"
            basePath={basePath}
          >
            <TextField source="title" allowEmpty />
          </ReferenceField>
        </CardText>
        <CardActions style={{ textAlign: "right" }}>
          <EditButton resource="slides" basePath={basePath} record={data[id]} />
        </CardActions>
      </Card>
    ))}
  </div>
);
SlideGrid.defaultProps = {
  data: {},
  ids: []
};

export const SlidesList = props => (
  <List title="All slides" {...props}>
    <SlideGrid />
  </List>
=======
import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton,
    DisabledInput, TextInput, SimpleForm, ReferenceInput, NumberInput, SelectInput} from 'admin-on-rest';


export const SlidesCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Select Presentation" source="presentation_id" defaulValue={props.presentation_id} reference="presentations"  allowEmpty>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <NumberInput label="Order of slide" source="order" />
            <TextInput label="Title of slide" source="title" />
            <TextInput label="Slide Caption" source="caption" />
            <TextInput label="Image" source="image" />
        </SimpleForm>
    </Create>
>>>>>>> 2681619847f7b5e28eee2ce58d65131b85a2913f
);
