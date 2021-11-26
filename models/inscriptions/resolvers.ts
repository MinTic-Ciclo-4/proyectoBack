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
        fechaIngreso: args.fechaIngreso,
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      })
      return inscripcionCreada;
    },
  }
}

export { resolversInscription };