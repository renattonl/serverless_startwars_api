const BadRequestException = require("../../../src/exceptions/BadRequestException")

describe("BadRequestException.js", () => {

  test("su tipado debe ser function y su instancia de la clase Error", () => {
    expect(typeof BadRequestException).toBe("function");
    expect(new BadRequestException()).toBeInstanceOf(Error);
  })

  test("al instanciar debe de tener el statusCode 400", () => {
    const sms_error = `El campo es requerido`;
    const error = new BadRequestException(sms_error);
    expect(error.statusCode).toBe(400);
    expect(error.message).toBe(sms_error);
  })
})