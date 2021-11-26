import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "../enums/enums";
import { ProjectModel } from "../projects/project";
import { UserModel } from "../users/user";

interface inscription {
  fechaIngreso: Date,
  fechaEgreso: Date,
  estado: Enum_EstadoInscripcion,
  proyecto: Schema.Types.ObjectId,
  estudiante: Schema.Types.ObjectId,
}

const  inscripcionSchema = new Schema<inscription>({
  fechaIngreso:{
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  estado: {
    type: String,
    enum: Enum_EstadoInscripcion,
    default: Enum_EstadoInscripcion.PENDIENTE,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  }
})

const inscriptionModel = model("Inscription", inscripcionSchema);

export { inscriptionModel };