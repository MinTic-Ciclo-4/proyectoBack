import { UserModel } from '../../models/users/user';
import bcrypt from 'bcrypt';

const resolversAuth = {
  Mutation :{
    registro: async (parent, args) => {

      const salt = bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);

      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
      });
      return "usuarioCreado";
    }
  }
}

export { resolversAuth };