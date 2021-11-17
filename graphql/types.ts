import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    nombre: String!
  }

  type Query {
    Users: [User]
  }
`;

export { typeDefs };