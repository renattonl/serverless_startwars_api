const UnauthorizedException = require("../../../src/exceptions/UnauthorizedException")

describe("UnauthorizedException.js", () => {

  test("su tipado debe ser function y su instancia de la clase Error", () => {
    expect(typeof UnauthorizedException).toBe("function");
    expect(new UnauthorizedException()).toBeInstanceOf(Error);
  })

  test("al instanciar debe de tener el statusCode 401", () => {
    const sms_error = `El campo es requerido`;
    const error = new UnauthorizedException(sms_error);
    expect(error.statusCode).toBe(401);
    expect(error.message).toBe(sms_error);
  })
})