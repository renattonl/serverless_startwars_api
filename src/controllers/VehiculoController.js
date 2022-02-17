const VehiculoService = require("../services/VehiculoService");
const response = require('../utils/response');

class VehiculoController {

  static async crear(event){
    try {
      const service = new VehiculoService();
      const body = JSON.parse(event.body ?? `{}`);
      const row = await service.crear(body);
      return response(row, 201);
    } catch (error) {
      return response({message: error.message}, error.statusCode ?? 500);
    }
  }

  static async obtener(event){
    try {
      const {id} = event.pathParameters ?? {};
      const service = new VehiculoService();
      const row = await service.obtener(id);
      return response(row);
    } catch (error) {
      return response({message: error.message}, error.statusCode ?? 500);
    }
  }
}

module.exports = VehiculoController;