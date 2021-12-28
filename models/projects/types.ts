import { gql } from "apollo-server-express";

const typesProject= gql`

  scalar Date

  type Objective{
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input createObjective{
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input camposObjetivo{
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input camposProyecto{
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
  }

  type Project {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: User!
    objetivos: [Objective]!
    avances: [Advancement]
    inscripciones: [Inscription]
  }

  type Query {
    Projects: [Project]
  }

  type Mutation {

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: String!
      objetivos: [createObjective]
    ):Project

    editarProyecto(
      _id: String!
      campos: camposProyecto
    ):Project

    crearObjetivo(
      idProyecto: String!
      campos: camposObjetivo!
      ):Project

    editarObjetivo(
      idProyecto: String!,
      indexObjetivo: Int!,
      campos: camposObjetivo,
    ):Project
  }
`;

export { typesProject };