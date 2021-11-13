import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto } from "./enums";

interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado : Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
}

const projectSchema = new Schema<Project>({

  nombre: {
    type: String,
    required: true
  },
  presupuesto: {
    type: Number,
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: {
    type: Date,
    required: true
  },
  estado: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.inactivo
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.nulo
  }
})

const UserProject = model("Project", projectSchema);

export { UserProject };