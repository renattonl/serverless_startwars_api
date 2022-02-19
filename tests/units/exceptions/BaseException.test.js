const BaseException = require("../../../src/exceptions/BaseException")

describe("BaseException.js", () => {

  test("el tipado debe ser function y su instancia de la clase Error", () => {
    expect(typeof BaseException).toBe("function");
    expect(new BaseException()).toBeInstanceOf(Error);
  })

  test("al instanciar debe de tener el statusCode 500", () => {
    const sms_error = `El campo es requerido`;
    const error = new BaseException(sms_error);
    expect(error.statusCode).toBe(500);
    expect(error.message).toBe(sms_error);
  })
})