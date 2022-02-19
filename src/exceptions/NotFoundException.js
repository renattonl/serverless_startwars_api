const BaseException = require("./BaseException");

class NotFoundException extends BaseException{

  statusCode = 404;

  constructor(...args){
    super(...args);
  }
}

module.exports = NotFoundException;