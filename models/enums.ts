//Enums User

enum Enum_Rol {
  ESTUDIANTE = "ESTUDIANTE",
  LIDER = "LÍDER",
  ADMINISTRADOR = "ADMINISTRADOR"
}


enum Enum_EstadoUsuario {
  PENDIENTE="PENDIENTE",
  AUTORIZADO= "AUTORIZADO",
  NO_AUTORIZADO = "NO AUTORIZADO",
}

//Enums Proyect

enum Enum_EstadoProyecto {
  activo = "Activo",
  inactivo = "Inactivo"
}

enum Enum_FaseProyecto {
  iniciado = "Iniciado",
  enDesarrollo = "En Desarrollo",
  terminado = "Terminado",
  nulo = ""
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