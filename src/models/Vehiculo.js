
class Vehiculo{

  ID;
  capacidad_cargo;
  consumibles;
  costo_en_creditos;
  tripulacion;
  largo;
  fabricante;
  valocidad_atmosferica_maxima;
  modelo;
  nombre;
  pasajeros;
  pilotos;
  peliculas;
  url;
  clase_de_vehiculo;
  creado;
  editado;

  constructor(data = {}){
    data = data ?? {};
    const properties = Object.keys(this);
    for (const key of properties) {
      this[key] = data[key] ?? null;
    }
  }

}

module.exports = Vehiculo;