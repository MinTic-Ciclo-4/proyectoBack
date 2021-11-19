import { UserModel } from "../models/user";

const resolvers = {
  Query: {
    Users: async (parent, args) => {

      const users = await UserModel.find();

      return users;
    }
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const crearUsuario = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol
      });

      if (Object.keys(args).includes('estado')) {
        crearUsuario.estado = args.estado;
      }

      return crearUsuario;
    },

    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes('_id')) {
        const eliminarUsuario = await UserModel.findByIdAndDelete({ _id: args._id })
        return eliminarUsuario;
      }else{
        const eliminarUsuario = await UserModel.findOneAndDelete({ correo: args.correo })
        return eliminarUsuario;
      }
    }
  }
}

export { resolvers };