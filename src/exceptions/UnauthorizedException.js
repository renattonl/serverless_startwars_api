const BaseException = require("./BaseException");

class UnauthorizedException extends BaseException{

  statusCode;

  constructor(...args){
    super(...args);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedException;