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
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id, { ...args.campos },
        {new: true}
      );
      return proyectoEditado;
    },
    crearObjetivo: async (parent, args) => {
      const objetivoCreado = await ProjectModel.findByIdAndUpdate(args.idProyecto, {
        $addToSet: {
          objetivos: { ...args.campos },
        },
      }, { new: true });
      return objetivoCreado;
    },
    editarObjetivo: async (parent, args) => {
      const objetivoEditado = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $set: {
            [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
            [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
          },
        },
        { new: true });
      return objetivoEditado;
    },
    eliminarObjetivo: async (parent, args) => {
      const objetivoEliminado = await ProjectModel.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $pull: {
            objetivos : {
              _id: args.idObjetivo,
            },
          },
        },
        { new : true }
      );
      return objetivoEliminado;
    },
  }
}

export { resolversProject };