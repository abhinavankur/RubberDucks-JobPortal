import React from 'react';
import { ReferenceField, Show,Link, SimpleShowLayout, List, RichTextField, DateField, Create, Datagrid, TextField, LongTextInput, TabbedForm,FormTab,SelectInput,DateInput,NumberInput, TextInput } from 'react-admin';


export const PostList = (props) => (
    <List linkType="show" {...props}>
        <Datagrid>
        <ReferenceField source="id" reference="Job" linkType="show" {...props}>
            <TextField source="id" />
        </ReferenceField>
            <TextField source="jobPortfolio" />
            <TextField source="jobDescription" />
        </Datagrid>
    </List> 
);

export const JobCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
        <FormTab label="Summary">
            <TextInput source="Title"  />
            <SelectInput source="category" choices={[
                { id: 'Finance/Accounting', name: 'Finance/Accounting' },
                { id: 'IT/Application Development', name: 'IT/Application Development' },
                { id: 'Janitorial Services', name: 'Janitorial Services' },
            ]} />
            <NumberInput source="Minimum Experience(Years)" />
        </FormTab>
        <FormTab label="Description">
            <LongTextInput source="Description"  />            
        </FormTab>
        <FormTab label="Schedule">
            <DateInput source="Last Date to apply"  />            
        </FormTab>
        </TabbedForm>
    </Create>
);

export const JobShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="jobName" />
            <TextField source="jobPortfolio" />
            <RichTextField source="jobDescription" />
            <DateField label="Last date to apply" source="lastDateToApply" />
            <DateField label="Interview Date" source="interviewDate" />
        </SimpleShowLayout>
    </Show>
);