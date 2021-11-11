import { Schema, model } from "mongoose";
import { Enum_EstadoUsuario, Enum_Rol } from "./enums";
interface User {
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
}

const userSchema = new Schema<User>({
  correo:{
    type: String,
    required: true,
  },
  identificacion:{
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
  estado: {
    type: String,
    required: true,
    enum: Enum_EstadoUsuario,
  }
});

const UserModel = model("User", userSchema);

export { UserModel };