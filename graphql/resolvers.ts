import { ProjectModel } from "../models/project";
import { UserModel } from "../models/user";

const resolvers = {
  Query: {
    Users: async (parent, args) => {
      const users = await UserModel.find();
      return users;
    },

    Projects: async (parent, args) => {
      const projects = await ProjectModel.find().populate('lider');
      return projects;
    }
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol
      });

      if (Object.keys(args).includes('estado')) {
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },

    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes('_id')) {
        const usuarioEliminado = await UserModel.findByIdAndDelete({ _id: args._id })
        return usuarioEliminado;
      }else{
        const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo })
        return usuarioEliminado;
      }
    },

    editarUsuario: async (parent, args) => {
      const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        estado: args.estado
      });
    },

    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        lider: args.lider,
        objetivos: args.objetivos
      })
    },
  }
}

export { resolvers };