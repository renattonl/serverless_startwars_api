
class BaseException extends Error{

  statusCode;

  constructor(...args){
    super(...args);
    this.statusCode = 500;
  }
}

module.exports = BaseException;