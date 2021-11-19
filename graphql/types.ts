import { gql } from "apollo-server-express";

const typeDefs = gql`

  enum Enum_EstadoUsuario{
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol{
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  type User {
    _id: ID
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }

  type Query {
    Users: [User]
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ):User

    eliminarUsuario(_id: String, correo: String):User
  }
`;

export { typeDefs };