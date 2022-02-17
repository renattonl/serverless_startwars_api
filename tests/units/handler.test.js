
const {crearVehiculo, obtenerVehiculo} = require('../../src/handler');

describe("handler.js", () => {
  test("El tipado de las funcione sean correctas", () => {
    expect(typeof crearVehiculo).toBe("function");
    expect(typeof obtenerVehiculo).toBe("function");
  })
})