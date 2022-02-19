const BaseException = require("./BaseException");
class BadRequestException extends BaseException{

  statusCode;

  constructor(...args){
    super(...args);
    this.statusCode = 400;
  }
}

module.exports = BadRequestException;