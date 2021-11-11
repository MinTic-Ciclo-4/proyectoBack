import { connect } from "mongoose";

const conectarBD = async () => {
  return await connect(
    "mongodb+srv://admin:admin@gestionproyectos-mintic.rctdv.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Conexion exitosa");
    })
    .catch((e) => {
      console.error("Error de la base de datos", e);
    })
}

export default conectarBD;