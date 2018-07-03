import React, { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql';
import { Admin, Resource, Delete } from 'react-admin';
import { PostList } from './posts';
import { __schema as schema } from './schema';
import ApolloClient from "apollo-boost";
import { introspectionResult } from './introspectionResult'
import gql from "graphql-tag";
import { createNetworkInterface } from 'react-apollo';
<<<<<<< HEAD
import {myLogin} from './loginStuff/login';

=======
import buildFieldList from './buildFieldList'
import buildArgList from './buildArgList'
>>>>>>> f0bfdd2b197eb5a535a3ca80aefdbf5a47528a3d

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
        query : gql`query ${resource[raFetchType].name}($jobId : Int!){
          data : ${resource[raFetchType].name}${buildArgList(introspectionResult, resource, raFetchType)}{
            ${buildFieldList(introspectionResult, resource, raFetchType)}
          }
        }`,
        variables : {},
        parseResponse : response => response.data
      }
    case 'GET_LIST':
      return {
        query : gql`query {
          data : ${resource[raFetchType].name}{
            ${buildFieldList(introspectionResult, resource, raFetchType)}
          }
        }`,
        variables : {},
        parseResponse : function(response) {
          var data = JSON.parse(JSON.stringify(response.data.data).split('"jobId":').join('"id":'));;
<<<<<<< HEAD
          console.log(data);
=======
        
>>>>>>> f0bfdd2b197eb5a535a3ca80aefdbf5a47528a3d
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
            <Admin loginPage={myLogin} dataProvider={dataProvider}>
                <Resource name="Job" list={PostList} remove={Delete} />
            </Admin>
        );
    }
}


export default App;