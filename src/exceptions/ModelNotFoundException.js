const BaseException = require("./BaseException");

class ModelNotFoundException extends BaseException{

  statusCode;

  constructor(...args){
    super(...args);
    this.statusCode = 404;
  }
}

module.exports = ModelNotFoundException;