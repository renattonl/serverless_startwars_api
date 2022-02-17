
const Vehiculo = require("../../../src/models/Vehiculo");

describe("Vehiculo.js", () => {

  const dataTest = {
    "ID": Date.now().toString(),
    "capacidad_cargo": "50000",
    "consumibles": "2 months",
    "costo_en_creditos": "150000",
    "tripulacion": "46",
    "largo": "36.8 ",
    "fabricante": "Corellia Mining Corporation",
    "valocidad_atmosferica_maxima": "30",
    "modelo": "Digger Crawler",
    "nombre": "Sand Crawler",
    "pasajeros": "30",
    "pilotos": [],
    "peliculas": [
      "https://swapi.py4e.com/api/films/1/",
      "https://swapi.py4e.com/api/films/5/"
    ],
    "url": "https://swapi.py4e.com/api/vehicles/4/",
    "clase_de_vehiculo": "wheeled",
    "creado": new Date().toISOString(),
    "editado": new Date().toISOString(),
  };

  test("debe de tener las propiedad y ser una function", () => {
    const vehiculo = new Vehiculo(dataTest);
    expect(vehiculo).toEqual(dataTest);
    expect(typeof Vehiculo).toBe("function");
  });

  test("si se le agrega mas propiedades al modelo, no debe ser igual", () => {
    const new_data = {...dataTest, test: true};
    const vehiculo = new Vehiculo(new_data);
    expect(vehiculo).toEqual(expect.not.objectContaining(new_data));
  });

});