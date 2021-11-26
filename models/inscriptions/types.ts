import { gql } from "apollo-server-express";

const typesInscription = gql`

  type Inscription {
    _id: ID!
    fechaIngreso: Date
    fechaEgreso: Date
    estado: Enum_EstadoInscripcion!
    proyecto: Project!
    estudiante: User!
  }

  type Query {
    Inscriptions: [Inscription]
  }

  type Mutation {

    crearInscripcion(
      estado: Enum_EstadoInscripcion!
      proyecto: String!
      estudiante: String!
    ):Inscription

    aprobarInscripcion(id: String!): Inscription
  }
`;

export { typesInscription };