const resolvers = {
  Query: {
    Users: async (parent, args) => {

      const usuarios = [
        {
          "nombre": "Johan"
        },
        {
          "nombre": "Alexander"
        },
        {
          "nombre": "Alison"
        },
      ];

      return usuarios;
    }
  }
}

export { resolvers };