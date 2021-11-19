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
      const crearUsuario = UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado,
        rol: args.rol
      })
      return crearUsuario;
    }
  }
}

export { resolvers };