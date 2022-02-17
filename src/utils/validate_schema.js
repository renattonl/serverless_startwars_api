const Ajv = require("ajv"); 
const validator = require('validator');

const validate_schema = (data = {}, schema = {}) => {
  for (const key in data) {
    if(typeof data[key] === "string"){
      data[key] = validator.trim(data[key]);
      data[key] = validator.unescape(data[key]);
    }
  }
  let statusError = false;
  let errors = [];
  for (const key of schema.required) {
    if(typeof data[key] === "string" && validator.isEmpty(data[key])){
      statusError = true
      errors = [...errors, `El campo ${key} es obligatorio`];
    }
  }
  if(!statusError){
    const ajv = new Ajv({allErrors : true});
    const validate = ajv.compile(schema);
    statusError = !validate(data);
    if(statusError){
      errors = validate.errors.map(e => e.message)
    }
  }
  return [statusError, errors]
}

module.exports = validate_schema;