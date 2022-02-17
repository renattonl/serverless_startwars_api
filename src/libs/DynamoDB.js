const AWS = require('aws-sdk');

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
        region: 'local-env',
        sslEnabled: false,
      }
    }
    this.documentClient = new AWS.DynamoDB.DocumentClient(options);
    this.TableName = TableName;
  }

  async get(ID){
    const params = {
      TableName: this.TableName,
      Key:{
        ID
      }
    };
    const data = await this.documentClient.get(params).promise();
    if(!data || !data.Item){
      throw Error(`El recurso solicitado con el ID "${ID}" no existe.`);
    }
    return data.Item;
  }

  async create(data){
    if(!data.ID){
      throw Error(`El ID es obligatorio para la tabla ${this.TableName}`);
    }
    const params = {
      TableName: this.TableName,
      Item: data,
    }
    const res = await this.documentClient.put(params).promise();
    if(!res){
      throw Error(`Hubo un error al insertar el ID: ${data.ID} en la tabla ${this.TableName}`)
    }
    return data;
  }
}

module.exports = DynamoDB;