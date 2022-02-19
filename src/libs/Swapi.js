const fetch = require('node-fetch');
const NotFoundException = require('../exceptions/NotFoundException');
const BASE_URL = `https://swapi.py4e.com/api`

class Swapi {

  static async getVehicle(id){
    try {
      const res = await fetch(`${BASE_URL}/vehicles/${id}`);
      const data = await res.json();
      if(res.status === 404){
        throw new NotFoundException(`No existe el registro con el ID: ${id}`);
      }
      return {
        ID: id,
        nombre: data.name,
        modelo: data.model,
        fabricante: data.manufacturer,
        costo_en_creditos: data.cost_in_credits,
        largo: data.length,
        valocidad_atmosferica_maxima: data.max_atmosphering_speed,
        tripulacion: data.crew,
        pasajeros: data.passengers,
        capacidad_cargo: data.cargo_capacity,
        consumibles: data.consumables,
        clase_de_vehiculo: data.vehicle_class,
        pilotos: data.pilots,
        peliculas: data.films,
        url: data.url,
      };
    } catch (error) {
      return Promise.reject(error)
    }
  }

}

module.exports = Swapi;