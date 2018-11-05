const { makeExecutableSchema } = require("graphql-tools");
const {ApolloServer} = require("apollo-server")

const typeDefs = require("./schema").Schema;
const resolvers = require("./resolver").Resolvers;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: {
    log: e => console.log(e)
  }
});


const server = new ApolloServer({
  cors : true,
  schema,
  endpointURL: '/graphql',
  subscriptionsEndpoint: `http://localhost:4000/subscriptions` 
})


server.listen(4000);

console.log("Running a GraphQL API server at  ");
