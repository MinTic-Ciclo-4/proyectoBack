import { ProjectModel } from "./project";

const resolversProject = {
  Query: {

    Projects: async (parent, args) => {
      const projects = await ProjectModel.find().populate('lider').populate('avances').populate('inscripciones');
      return projects;
    }
  },

  Mutation: {

    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        lider: args.lider,
        objetivos: args.objetivos
      })
      return proyectoCreado;
    },
  }
}

export { resolversProject };