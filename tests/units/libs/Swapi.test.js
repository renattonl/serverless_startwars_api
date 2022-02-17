const Swapi = require("../../../src/libs/Swapi");

describe("Swapi.js", () => {

  test("el tipado es de tipo function", () => {
    expect(typeof Swapi).toBe("function");
    expect(typeof Swapi.getVehicle).toBe("function");
  });

  test("haciendo peticion de un registro que existe", async () => {
    const row = await Swapi.getVehicle(4);
    expect(typeof row).toBe("object");
    expect(row.ID).toBe(4);
    expect(row.nombre).toBeDefined();
    expect(row.modelo).toBeDefined();
    expect(row.fabricante).toBeDefined();
    expect(row.costo_en_creditos).toBeDefined();
    expect(row.largo).toBeDefined();
    expect(row.valocidad_atmosferica_maxima).toBeDefined();
    expect(row.tripulacion).toBeDefined();
    expect(row.pasajeros).toBeDefined();
    expect(row.capacidad_cargo).toBeDefined();
    expect(row.consumibles).toBeDefined();
    expect(row.clase_de_vehiculo).toBeDefined();
    expect(row.pilotos).toBeDefined();
    expect(Array.isArray(row.pilotos)).toBe(true)
    expect(row.peliculas).toBeDefined();
    expect(Array.isArray(row.peliculas)).toBe(true)
    expect(row.url).toBeDefined();
  });

  test("Haciendo una peticion de un registro que no existe", async () => {
    try {
      await Swapi.getVehicle('ABC123');
    } catch (error) {
      expect(error instanceof Error).toBe(true);
      expect(error.message).toBeDefined();
    }
  })
})