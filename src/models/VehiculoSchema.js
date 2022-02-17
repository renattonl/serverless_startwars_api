
const VehiculoSchema = {
  type: "object",
  properties: {
    ID: {type: "string"},
    capacidad_cargo: {type: "string"},
    consumibles: {type: "string"},
    costo_en_creditos: {type: "string"},
    creado: {type: "string"},
    tripulacion: {type: "string"},
    editado: {type: "string"},
    largo: {type: "string"},
    fabricante: {type: "string"},
    valocidad_atmosferica_maxima: {type: "string"},
    modelo: {type: "string"},
    nombre: {type: "string"},
    pasajeros: {type: "string"},
    pilotos: {type: "array"},
    peliculas: {type: "array"},
    url: {type: "string"},
    clase_de_vehiculo: {type: "string"},
  },
  required: [
    "ID","capacidad_cargo","consumibles",
    "costo_en_creditos", "creado", "tripulacion",
    "editado", "largo", "fabricante", "valocidad_atmosferica_maxima",
    "modelo", "nombre", "pasajeros", "pilotos",
    "peliculas", "url", "clase_de_vehiculo",
  ],
  additionalProperties: false,
}

module.exports = VehiculoSchema;