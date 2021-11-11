import conectarBD from "./db/db";
import { Enum_Rol, Enum_EstadoUsuario } from "./models/enums";
import { UserModel } from "./models/user";

const main = async () => {
  await conectarBD();

  await UserModel.create({
    correo: "johanfore69@gmail.com",
    identificacion: "1007445874",
    nombre: "Johan",
    apellido: "Orozco",
    rol: Enum_Rol,
    estado: Enum_EstadoUsuario.pendiente
  })
  .then(u => {
    console.log("Usuario Creado", u);
  })
  .catch((e) => {
    console.error("Error al crear el usuario", e);
  });

  //Obtener Usuarios

  await UserModel.find()
    .then((u) => {
      console.log("usuarios", u);
    })
    .catch((e) => {
      console.error("Error obteniendo los usuarios", e);
    })

}

main();