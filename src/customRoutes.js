import React from 'react';
import { Route } from 'react-router-dom';
import {RegisterForm} from './register';

export default [
    <Route exact path="/register" component={RegisterForm} noLayout />,
];