import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="jobPortfolio" />
            <TextField source="jobDescription" />
        </Datagrid>
    </List>
);