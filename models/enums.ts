//Enums User

enum Enum_Rol {
  estudiante = "Estudiante",
  lider = "Líder",
  administrador = "Administrador",
}

enum Enum_EstadoUsuario {
  pendiente = "Pendiente",
  autorizado = "Autorizado",
  noAutorizado = "No Autorizado"
}

//Enums Proyect

enum Enum_EstadoProyecto {
  activo = "Activo",
  inactivo = "Inactivo"
}

enum Enum_FaseProyecto {
  iniciado = "Iniciado",
  enDesarrollo = "En Desarrollo",
  terminado = "Terminado"
}

//Enums Objective

enum Enum_TipoObjetivo {
  general = "General",
  especifico = "Especifico"
}

//Enums Inscripcion

enum Enum_EstadoInscripcion {
  aceptada = "Aceptada",
  rechazada = "Rechazada"
}

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto,
  Enum_FaseProyecto, Enum_TipoObjetivo, Enum_EstadoInscripcion }