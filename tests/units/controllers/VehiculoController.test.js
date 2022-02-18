
const VehiculoController = require("../../../src/controllers/VehiculoController");
const BadRequestException = require("../../../src/exceptions/BadRequestException");
const NotFoundException = require("../../../src/exceptions/NotFoundException");

describe("VehiculoController.js", () => {

  const dataTest = {
    "capacidad_cargo": "50000",
    "consumibles": "2 months",
    "costo_en_creditos": "150000",
    "tripulacion": "46",
    "largo": "36.8",
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
  };

  test("debe ser una funcion tipo clase", () => {
    expect(typeof VehiculoController).toBe("function");
    expect(typeof VehiculoController.crear).toBe("function");
    expect(typeof VehiculoController.obtener).toBe("function");
  });

  test("el metodo crear debe de retornar ok", async () => {
    try {
      const res = await VehiculoController.crear({
        body: JSON.stringify(dataTest)
      });
      expect(typeof res).toBe("object");
      expect(res.statusCode).toBe(201);
      expect(typeof res.body).toBe("string");
      const row = JSON.parse(res.body);
      expect(row.ID).toBeDefined();
    } catch (error) {
      console.log(error);
    }
  });

  test("el metodo crear debe de retornar error", async () => {
    try {
      await VehiculoController.crear({
        body: JSON.stringify({})
      });
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.statusCode).toBe(400);
    }
  });

  test("el metodo obtener debe devolver ok", async () => {
    try {
      const res = await VehiculoController.obtener({
        pathParameters: {id: 4}
      });
      expect(typeof res).toBe("object");
      expect(res.statusCode).toBe(200);
      expect(typeof res.body).toBe("string");
      const row = JSON.parse(res.body);
      expect(row.ID).toBeDefined();
    } catch (error) {
      console.log(error);
    }
  });

  test("el metodo obtener debe devolver error", async () => {
    try {
      await VehiculoController.obtener({
        pathParameters: {id: 'ABC123'}
      })
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.statusCode).toBe(404);
    }
  });
})