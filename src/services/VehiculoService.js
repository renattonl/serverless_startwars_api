
const DynamoDB = require("../libs/DynamoDB");
const VehiculoSchema = require("../models/VehiculoSchema");
const validate_schema = require("../utils/validate_schema");
const Swapi = require("../libs/Swapi");
const Vehiculo = require("../models/Vehiculo");
const NotFoundException = require("../exceptions/NotFoundException");
const BadRequestException = require('../exceptions/BadRequestException');
const ModelNotFoundException = require('../exceptions/ModelNotFoundException');

class VehiculoService{

  constructor(){
    this.db = new DynamoDB('vehiculosTable');
  }

  _validar(data){
    const [has_error, errors] = validate_schema(data, VehiculoSchema);
    if(has_error && errors.length){
      throw new BadRequestException(errors[0])
    }
    return data;
  }

  async crear(data){
    try {
      data.ID = (data.ID ?? Date.now()).toString();
      data.creado = (new Date()).toISOString();
      data.editado = (new Date()).toISOString();
      const vehiculo = new Vehiculo(this._validar(data));
      return this.db.create(vehiculo);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async obtener(ID) {
    try {
      let row = null;
      try {
        row = await this.db.get(ID);
      } catch (error) {
        if(error instanceof ModelNotFoundException){
          row = await Swapi.getVehicle(ID);
          await this.crear(row);
        } else {
          throw error;
        }
      }
      return new Vehiculo(row);
    } catch (error) {
      return Promise.reject(error);
    }
  }

}

module.exports = VehiculoService;