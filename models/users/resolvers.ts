import { UserModel } from "./user";

const resolversUser = {
  Query: {
    Users: async (parent, args) => {
      const users = await UserModel.find().populate([
        {
          path: 'inscripciones',
          populate: {
            path: 'proyecto',
            populate : {
              path: 'lider',
            },
          },
        },
      ]).populate('avancesCreados').populate('proyectosLiderados');
      return users;
    },
    User: async (parent, args) => {
      const user = await UserModel.findOne({ _id: args._id });
      return user;
    },
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
      } else {
        const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo })
        return usuarioEliminado;
      }
    },

    editarUsuario: async (parent, args) => {
      const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado
      },
        {new: true}
      );

      return usuarioEditado;
    },
  }
}

export { resolversUser };