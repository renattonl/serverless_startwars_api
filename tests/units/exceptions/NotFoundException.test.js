const NotFoundException = require("../../../src/exceptions/NotFoundException")

describe("NotFoundException.js", () => {

  test("su tipado debe ser function y su instancia de la clase Error", () => {
    expect(typeof NotFoundException).toBe("function");
    expect(new NotFoundException()).toBeInstanceOf(Error);
  })

  test("al instanciar debe de tener el statusCode 404", () => {
    const sms_error = `El campo es requerido`;
    const error = new NotFoundException(sms_error);
    expect(error.statusCode).toBe(404);
    expect(error.message).toBe(sms_error);
  })
})