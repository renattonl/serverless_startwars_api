"use strict";

const VehiculoController = require("./controllers/VehiculoController");

module.exports = {
  crearVehiculo: VehiculoController.crear,
  obtenerVehiculo: VehiculoController.obtener,
};