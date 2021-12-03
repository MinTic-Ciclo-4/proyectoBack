import { Enum_EstadoInscripcion } from "../enums/enums";
import { inscriptionModel } from "./inscription";

const resolversInscription = {
  Query: {

    Inscriptions: async (parent, args) => {
      const inscriptions = await inscriptionModel.find().populate("proyecto").populate("estudiante");
      return inscriptions;
    }
  },

  Mutation: {

    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await inscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      })
      return inscripcionCreada;
    },

    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await inscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: Enum_EstadoInscripcion.ACEPTADA,
          fechaIngreso: new Date(Date.now()),
        },
        { new: true }
      );
      return inscripcionAprobada;
    },
  }
}

export { resolversInscription };