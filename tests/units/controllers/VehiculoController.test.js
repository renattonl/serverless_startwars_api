
const VehiculoController = require("../../../src/controllers/VehiculoController");

describe("VehiculoController.js", () => {

  test("debe ser una funcion tipo clase", () => {
    expect(typeof VehiculoController).toBe("function");
    expect(typeof VehiculoController.crear).toBe("function");
    expect(typeof VehiculoController.obtener).toBe("function");
  });

  test("el metodo crear debe de retornar ok", () => {

  })
})