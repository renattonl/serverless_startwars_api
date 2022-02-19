const ModelNotFoundException = require("../../../src/exceptions/ModelNotFoundException")

describe("ModelNotFoundException.js", () => {

  test("el tipado debe ser function y su instancia de la clase Error", () => {
    expect(typeof ModelNotFoundException).toBe("function");
    expect(new ModelNotFoundException()).toBeInstanceOf(Error);
  })

  test("al instanciar debe de tener el statusCode 404", () => {
    const sms_error = `El campo es requerido`;
    const error = new ModelNotFoundException(sms_error);
    expect(error.statusCode).toBe(404);
    expect(error.message).toBe(sms_error);
  })
})