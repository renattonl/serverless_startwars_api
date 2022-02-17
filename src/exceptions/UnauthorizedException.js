
class UnauthorizedException extends Error{

  statusCode;

  constructor(...args){
    super(...args);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedException;