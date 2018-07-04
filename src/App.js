import React, { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql';
import { Admin, Resource, Delete } from 'react-admin';
import { PostList,JobCreate, JobShow } from './posts';
import { __schema as schema } from './schema';
import ApolloClient from "apollo-boost";
import { introspectionResult } from './introspectionResult'
import gql from "graphql-tag";
import { createNetworkInterface } from 'react-apollo';
import Login from './login';
import customRoutes from './customRoutes';
import buildFieldList from './buildFieldList';
import buildArgList from './buildArgList';
import authProvider from './authProvider';

const myClient = new ApolloClient({
  uri: "http://10.74.18.242:4000/graphql"
});

const introspectionOptions = {
    schema
};

const queryBuilder = introspectionResults => (raFetchType, resourceName, params) => {
  const resource = introspectionResult.resources.find(r => r.type.name === resourceName);
  console.log(resource)
  console.log("Fetch type : --- " + raFetchType);
  switch(raFetchType) {
    case 'GET_ONE' : 
      return {
        query : gql`query {
          data : ${resource[raFetchType].name}${buildArgList(introspectionResult, resource, raFetchType,params)}{
            ${buildFieldList(introspectionResult, resource, raFetchType,params)}
          }
        }`,
        variables : {},
        parseResponse : function(response) {
          var data = JSON.parse(JSON.stringify(response.data.data).split('"jobId":').join('"id":'));
          console.log(data);
          return { "data" : data}}
      }
    case 'GET_LIST':
      return {
        query : gql`query {
          data : ${resource[raFetchType].name}${buildArgList(introspectionResult, resource, raFetchType,params)}{
            ${buildFieldList(introspectionResult, resource, raFetchType,params)}
          }
        }`,
        variables : {},
        parseResponse : function(response) {
          var data = JSON.parse(JSON.stringify(response.data.data).split('"jobId":').join('"id":'));
          console.log(data);
          return { "data" : data, "total" : data.length}}
      }
  }
};

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildGraphQLProvider({
          client: myClient,
          introspection: introspectionOptions,
          buildQuery : queryBuilder
        }).then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin loginPage={Login} dataProvider={dataProvider}>
                <Resource name="Job" list={PostList} remove={Delete} create={JobCreate} show={JobShow}/>
            </Admin>
        );
    }
}


export default App;