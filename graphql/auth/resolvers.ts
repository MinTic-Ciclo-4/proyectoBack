

const resolversAuth = {
  Mutation :{
    registro: async (parent, args) => {
      console.log("Crear Usuario", args);
      return 'Usuario Creado';
    }
  }
}

export { resolversAuth };