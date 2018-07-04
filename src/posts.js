import React from 'react';
import { ReferenceField, Show,Link,TabbedShowLayout, Tab, SimpleShowLayout, List, RichTextField, DateField, Create, Datagrid, TextField, LongTextInput, TabbedForm,FormTab,SelectInput,DateInput,NumberInput, TextInput } from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {SubmitJobButton} from './submitJobButton';

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
            <SelectInput source="Portfolio" choices={[
                { id: 'VES', name: 'VES' },
                { id: 'CMB', name: 'CMB' },
                { id: 'N&T', name: 'N&T' },
                { id: 'CFO', name: 'CFO' },
                { id: 'CAO', name: 'CAO' },
                { id: 'VPS', name: 'VPS' },
            ]} />
        </FormTab>
        <FormTab label="Description">
            <LongTextInput source="Description"  />            
        </FormTab>
        <FormTab label="Schedule">
            <DateInput source="Last Date to apply"  />            
        </FormTab>
        <FormTab label="Contact">
            <TextInput label="POC E-Mail" source="email" type="email" />
            <NumberInput source="Phone Number" />
        </FormTab>
        </TabbedForm>
    </Create>
);


const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const PostShowActions = ({ permissions, basePath, data, resource  }) => (
    <CardActions style={cardActionStyle}>
        {permissions === 'candidate' &&
            <SubmitJobButton record={data}/>
        }
    </CardActions>
);

export const JobShow = ({ permissions, ...props }) => (
<Show actions={<PostShowActions permissions={permissions} />} {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="jobName"  />
                <TextField source="jobPortfolio" />
            </Tab>
            <Tab label="Description">
                <RichTextField source="jobDescription" />       
            </Tab>
            <Tab label="Schedule">
                <DateField label="Last date to apply" source="lastDateToApply" /> 
            </Tab>
            <Tab label="Contact">
                <TextField source="email"  />
                <TextField source="phoneNumber" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);