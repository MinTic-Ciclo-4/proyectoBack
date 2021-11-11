import conectarBD from "./db/db";
import { UserModel } from "./models/user";

const main = async () => {
  await conectarBD();

  await UserModel.create({
    correo: "johanfore67@gmail.com",
    identificacion: "10047851",
    nombre: "Johan",
    apellido: "Forero"
  })
  .then(u => {
    console.log("Usuario Creado", u);
  })
  .catch((e) => {
    console.error("Error al crear el usuario", e);

  })
}

main();