import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="jobId" />
            <TextField source="jobPortfolio" />
            <TextField source="jobDescription" />
        </Datagrid>
    </List>
);