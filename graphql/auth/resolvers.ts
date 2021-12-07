import { UserModel } from '../../models/users/user';

const resolversAuth = {
  Mutation :{
    registro: async (parent, args) => {
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: args.password,
      });
      return "usuarioCreado";
    }
  }
}

export { resolversAuth };