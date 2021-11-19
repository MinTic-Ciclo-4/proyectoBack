import conectarBD from "./db/db";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ObjectiveModel } from "./models/objective";
import { ProjectModel } from "./models/project";
import { UserModel } from "./models/user";

const crearProyecto = async () => {
  await ProjectModel.create({
    nombre: "Proyecto 2",
    presupuesto: 200000,
    fechaInicio: Date.now(),
    fechaFin: new Date("2022/11/10"),
    lider: "618f272d30bdc63f491d7c2e",
    objetivos: [
      {descripcion: "Este es el objetivo general", tipo: Enum_TipoObjetivo.GENERAL},
      {descripcion: "Este es el primer objetivo especifico", tipo: Enum_TipoObjetivo.ESPECIFICO},
      {descripcion: "Este es el segundo objetivo especifico", tipo: Enum_TipoObjetivo.ESPECIFICO}]
  })
    .then(u => {
      console.log("Proyecto Creado", u);
    })
    .catch((e) => {
      console.error("Error al crear el Proyecto", e);
    });
}

const crearUsuario = async () => {
  await UserModel.create({
    correo: "johanfore69@gmail.com",
    identificacion: "1007445878",
    nombre: "Johan",
    apellido: "Orozco",
    rol: Enum_Rol.ADMINISTRADOR,
  })
  .then(u => {
    console.log("Usuario Creado", u);
  })
  .catch((e) => {
    console.error("Error al crear el usuario", e);
  });
}

const editarUsuario = async () => {
  await UserModel.findOneAndUpdate({correo: "johanfore67@gmail.com"}, {
    nombre: 'Alexander',
    apellido: 'Orozco'
  })
  .then((u) => {
    console.log("Usuario Actualizado", u);
  })
  .catch((e) => {
    console.error("Error al actualizar el usuario", e);
  })
}

const eliminarUsuario = async () => {
  await UserModel.findOneAndDelete({correo: 'johanfore67@gmail.com'})
    .then((u) => {
      console.log("Usuario Eliminado", u);
    })
    .catch((e) => {
      console.error("Usuario no Eliminado", e);
    })
}

const obtenerUsuarios = async () => {
  await UserModel.find()
    .then((u) => {
      console.log("usuarios", u);
    })
    .catch((e) => {
      console.error("Error obteniendo los usuarios", e);
    })
}

const obtenerusuario = async () => {
  await UserModel.findOne({correo: 'johanfore67@gmail.com'})
  .then((u) => {
    console.log("Usuario Encontrado", u);
  })
  .catch((e) => {
    console.error("Error en la busqueda", e);
  })
}

const main = async () => {
  await conectarBD();

  // const object = await ObjectiveModel.create({
  //   descripcion: "Este es el objetivo especifico",
  //   tipo: Enum_TipoObjetivo.especifico
  // })

  const proyectoCreado = await ProjectModel.find({nombre: "Proyecto 2"}).populate("lider");
  console.log("El proyecto es", JSON.stringify(proyectoCreado));


  //Buscar proyecto con relacion fuerte

  // const proyecto: any = await ProjectModel.find({nombre: "Proyecto 1"}).populate('objetivos');
  // console.log("El proyecto es ", JSON.stringify(proyecto));

}

main();