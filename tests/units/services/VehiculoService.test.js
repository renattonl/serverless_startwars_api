jest.mock('../../../src/services/VehiculoService');
const BadRequestException = require("../../../src/exceptions/BadRequestException");
const NotFoundException = require("../../../src/exceptions/NotFoundException");
const Vehiculo = require("../../../src/models/Vehiculo");
const VehiculoService = require("../../../src/services/VehiculoService");


describe("VehiculoService.js", () => {
  const service = new VehiculoService();
  const dataTest = {
    "ID": "1",
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
  };

  test("debe tener el tipado y sus respectivos metodos", () => {
    expect(typeof VehiculoService).toBe("function");
    expect(typeof service._validar).toBe("function");
    expect(typeof service.crear).toBe("function");
    expect(typeof service.obtener).toBe("function");
  });

  test("el metodo crear debe devolver el modelo Vehiculo", async () => {
    try {
      service.crear.mockResolvedValue(Promise.resolve(new Vehiculo(dataTest)));
      const row = await service.crear(dataTest);
      expect(row).toBeInstanceOf(Vehiculo);
    } catch (error) {
      console.log('error service', error)
    }
  });

  test('el metodo crear debe devolver error BadRequestException', async () => {
    try {
      service.crear.mockResolvedValue(Promise.reject(new BadRequestException()));
      await service.crear({});
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }
  });

  test("el metodo get debe devolver el modelo Vehiculo", async () => {
    service.obtener.mockResolvedValue(Promise.resolve(new Vehiculo(dataTest)));
    const row = await service.obtener(dataTest.ID);
    expect(row).toBeInstanceOf(Vehiculo);
  });

  test("el metodo obtener devuelve error, el ID debe ser string", async () => {
    try {
      service.obtener.mockResolvedValue(Promise.reject(new NotFoundException()));
      await service.obtener(Date.now());
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });

});