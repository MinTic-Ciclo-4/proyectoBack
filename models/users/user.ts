import { Schema, model } from "mongoose";
import { Enum_EstadoUsuario, Enum_Rol } from "../enums/enums";

interface User {
  correo: string;
  password: string;
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
    unique: true,
    validate:{
      // validator: (email) => {
      //   if(email.includes('@') && email.includes('.')){
      //     return true;
      //   }else {
      //     return false;
      //   }
      // },
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'El formato del correo electonico es erroneo',
    },
  },
  password: {
    type: String,
    required: true
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
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.PENDIENTE,
  }
}, {
  //Rendireze mis esquemas virtuales
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
});

userSchema.virtual("avancesCreados", {
  ref: "Advance",
  localField: "_id",
  foreignField: "creadoPor",
});

userSchema.virtual("inscripciones", {
  ref: "Inscription",
  localField: "_id",
  foreignField: "proyecto",
});

const UserModel = model("User", userSchema);

export { UserModel };