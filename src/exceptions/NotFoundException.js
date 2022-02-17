
class NotFoundException extends Error{

  statusCode;

  constructor(...args){
    super(...args);
    this.statusCode = 404;
  }
}

module.exports = NotFoundException;