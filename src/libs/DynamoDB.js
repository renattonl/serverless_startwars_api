const AWS = require('aws-sdk');
const BadRequestException = require('../exceptions/BadRequestException');
const BaseException = require('../exceptions/BaseException');
const ModelNotFoundException = require('../exceptions/ModelNotFoundException');

class DynamoDB {

  constructor(TableName){
    let options = {}
    if(process.env.IS_OFFLINE){
      options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      }
    }
    if(process.env.JEST_WORKER_ID){
      options = {
        endpoint: 'localhost:8000',
        sslEnabled: false,
        region: 'local-env',
      }
    }
    this.documentClient = new AWS.DynamoDB.DocumentClient(options);
    this.TableName = TableName;
  }

  async get(ID){
    try {
      const params = {
        TableName: this.TableName,
        Key:{
          ID
        }
      };
      const data = await this.documentClient.get(params).promise();
      if(!data || !data.Item){
        throw new ModelNotFoundException(`El recurso solicitado con el ID "${ID}" no existe.`);
      }
      return data.Item;
    } catch (error) {
      if(error instanceof ModelNotFoundException){
        return Promise.reject(error)
      }
      return Promise.reject(new BaseException(error));
    }
  }

  async create(data){
    try {
      if(!data.ID){
        throw new BadRequestException(`El ID es obligatorio para la tabla ${this.TableName}`);
      }
      const params = {
        TableName: this.TableName,
        Item: data,
      }
      const res = await this.documentClient.put(params).promise();
      if(!res){
        throw new BadRequestException(`Hubo un error al insertar el ID: ${data.ID} en la tabla ${this.TableName}`)
      }
      return data;
    } catch (error) {
      if(error instanceof ModelNotFoundException){
        return Promise.reject(error)
      }
      return Promise.reject(new BaseException(error));
    }
  }
}

module.exports = DynamoDB;