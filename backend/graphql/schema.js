const { GraphQLObjectType ,GraphQLSchema, GraphQLString } = require('graphql');
const { resolveFieldValueOrError } = require('graphql/execution/execute');
const mongoose = require('mongoose');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    test: {
      type: GraphQLString,
      resolve(parent, args) {
        return "TEST GRAPHQL QUERY";
      }
    },
    testDB: {
      type: GraphQLString,
      resolve(parent, args) {
        const res = mongoose.connection.host;
        if (!res) {
          const errorString = `Not connected to DB`;
          console.error(errorString.bgRed);
          return errorString;
        }
        console.log(res.bgGrey);
        return res.toString();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
