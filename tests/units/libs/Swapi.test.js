jest.mock('node-fetch');
const fetch = require('node-fetch');
const Swapi = require("../../../src/libs/Swapi");

describe("Swapi.js", () => {

  const dataTest = {
    ID: 4,
  }

  test("el tipado es de tipo function", () => {
    expect(typeof Swapi).toBe("function");
    expect(typeof Swapi.getVehicle).toBe("function");
  });

  test("haciendo peticion de un registro que existe", async () => {
    fetch.mockReturnValue(Promise.resolve({
      status: 200,
      json: async () => (dataTest)
    }));

    const row = await Swapi.getVehicle(dataTest.ID);
    expect(typeof row).toBe("object");
    expect(row.ID).toBe(dataTest.ID);
  });

  test("Haciendo una peticion de un registro que no existe", async () => {
    try {
      fetch.mockReturnValue(Promise.resolve({
        status: 404,
        json: async () => (Promise.reject(Error(`No existe`)))
      }));

      await Swapi.getVehicle(1);
    } catch (error) {
      expect(error instanceof Error).toBe(true);
      expect(error.message).toBe(`No existe`);
    }
  })
})