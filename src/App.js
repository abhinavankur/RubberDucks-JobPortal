import React, { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql';
import { Admin, Resource, Delete } from 'react-admin';
import { PostList } from './posts';
import { __schema as schema } from './schema';
import ApolloClient from "apollo-boost";
import { introspectionResult } from './introspectionResult'
import gql from "graphql-tag";
import { createNetworkInterface } from 'react-apollo';


const myClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const introspectionOptions = {
    schema
};

const queryBuilder = introspectionResults => (raFetchType, resourceName, params) => {
  const resource = introspectionResult.resources.find(r => r.type.name === resourceName);
  console.log(resource)
  //console.log(resourceName)
  //console.log();
  //console.log(raFetchType)
  //console.log(params)
  //console.log(introspectionResult.resources)
  console.log("Fetch type : --- " + raFetchType);
  switch(raFetchType) {
    case 'GET_ONE' : 
      return {
        query : gql`query ${resource[raFetchType].name}($jobId : Int!){
          data : ${resource[raFetchType].name}(jobId : $jobId){
            jobId,
            jobPortfolio,
            jobDescription
          }
        }`,
        variables : {},
        parseResponse : response => response.data
      }
    case 'GET_LIST':
      return {
        query : gql`query {
          data : ${resource[raFetchType].name}{
            jobId,
            jobPortfolio,
            jobDescription
          }
        }`,
        variables : {},
        parseResponse : function(response) {
          var data = JSON.parse(JSON.stringify(response.data.data).split('"_id":').join('"id":'));;
        
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
            <Admin dataProvider={dataProvider}>
                <Resource name="Job" list={PostList} remove={Delete} />
            </Admin>
        );
    }
}


export default App;