
class BadRequestException extends Error{

  statusCode;

  constructor(...args){
    super(...args);
    this.statusCode = 400;
  }
}

module.exports = BadRequestException;