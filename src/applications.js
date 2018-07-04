import React from 'react';
import { ReferenceField, Show,Link,TabbedShowLayout, Tab, SimpleShowLayout, List, RichTextField, DateField, Create, Datagrid, TextField, LongTextInput, TabbedForm,FormTab,SelectInput,DateInput,NumberInput, TextInput } from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {SubmitJobButton} from './submitJobButton';

export const AppList = (props) => (
    <List linkType="show" {...props}>
        <Datagrid>
        <ReferenceField source="id" reference="JobApplication" linkType="show" {...props}>
            <TextField source="id" />
        </ReferenceField>
            <TextField source="jobId" />
            <TextField source="jobName" />
        </Datagrid>
    </List> 
);

export const AppShow = ({ ...props }) => (
    <Show {...props}>
            <TabbedShowLayout>
                <Tab label="Summary">
                    <TextField source="jobName"  />
                    <TextField source="jobPortfolio" />
                </Tab>
                <Tab label="Description">
                    <RichTextField source="jobDescription" />       
                </Tab>
                <Tab label="Schedule">
                    <DateField label="Applied On" source="appliedOn" />
                    <DateField label="Last date to apply" source="lastDateToApply" />
                </Tab>
                <Tab label="Contact">
                    <TextField source="email"  />
                    <TextField source="phoneNumber" />
                </Tab>
                <Tab>

                </Tab>
            </TabbedShowLayout>
        </Show>
    );