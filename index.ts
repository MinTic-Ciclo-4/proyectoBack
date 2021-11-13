import conectarBD from "./db/db";
import { Enum_Rol, Enum_EstadoUsuario } from "./models/enums";
import { ProjectModel } from "./models/project";
import { UserModel } from "./models/user";

const main = async () => {
  await conectarBD();

  //Crear Proyecto

  // await ProjectModel.create({
  //   nombre: "Proyecto 1",
  //   presupuesto: 200000,
  //   fechaInicio: Date.now(),
  //   fechaFin: new Date("2022/11/10"),
  //   lider: "618f272d30bdc63f491d7c2e"
  // })
  //   .then(u => {
  //     console.log("Proyecto Creado", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error al crear el Proyecto", e);
  //   });

  //Buscar proyecto con relacion fuerte

  const proyecto: any = await ProjectModel.find({nombre: "Proyecto 1"}).populate('lider');
  console.log("El proyecto es ", proyecto);


  //Crear Usuario

  // await UserModel.create({
  //   correo: "johanfore69@gmail.com",
  //   identificacion: "1007445878",
  //   nombre: "Johan",
  //   apellido: "Orozco",
  //   rol: Enum_Rol.administrador,
  // })
  // .then(u => {
  //   console.log("Usuario Creado", u);
  // })
  // .catch((e) => {
  //   console.error("Error al crear el usuario", e);
  // });

  //Obtener un Usuario

  // await UserModel.findOne({correo: 'johanfore67@gmail.com'})
  // .then((u) => {
  //   console.log("Usuario Encontrado", u);
  // })
  // .catch((e) => {
  //   console.error("Error en la busqueda", e);
  // })

  //Obtener Usuarios

  // await UserModel.find()
  //   .then((u) => {
  //     console.log("usuarios", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error obteniendo los usuarios", e);
  //   })

  // Modificar Usuario

  // await UserModel.findOneAndUpdate({correo: "johanfore67@gmail.com"}, {
  //   nombre: 'Alexander',
  //   apellido: 'Orozco'
  // })
  // .then((u) => {
  //   console.log("Usuario Actualizado", u);
  // })
  // .catch((e) => {
  //   console.error("Error al actualizar el usuario", e);

  // })

  //Eliminar Usuario

  // await UserModel.findOneAndDelete({correo: 'johanfore67@gmail.com'})
  // .then((u) => {
  //   console.log("Usuario Eliminado", u);
  // })
  // .catch((e) => {
  //   console.error("Usuario no Eliminado", e);
  // })

}

main();