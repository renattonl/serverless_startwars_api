jest.mock("../../../src/libs/DynamoDB");
const BaseException = require("../../../src/exceptions/BaseException");
const ModelNotFoundException = require("../../../src/exceptions/ModelNotFoundException");
const DynamoDB = require("../../../src/libs/DynamoDB");

describe("DynamoDB.js" , () => {

  const tableName = 'vehiculosTable';
  const dataDB = {
    ID: '1',
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
    "creado": "2022-02-18T04:59:00.526Z",
    "editado": "2022-02-18T04:59:00.526Z"
  };

  test("El tipado de la clase debe ser function", () => {
    expect(typeof DynamoDB).toBe("function");
    const db = new DynamoDB(tableName);
    expect(typeof db.create).toBe("function");
    expect(typeof db.get).toBe("function");
  });

  test("el metodo create debe devolver ok", async () => {
    const db = new DynamoDB(tableName);
    db.create.mockReturnValue(Promise.resolve(dataDB));
    const row = await db.create(dataDB);
    expect(row).toEqual(dataDB);
  });

  test("el metodo create debe devolver error", async () => {
    try {
      const db = new DynamoDB(tableName);
      db.create.mockReturnValue(new BaseException)
      await db.create({...dataDB, ID: Date.now()});
    } catch (error) {
      expect(error).toBeInstanceOf(BaseException);
    }
  });

  test("el metodo get debe devolver ok", async () => {
    const db = new DynamoDB(tableName);
    db.get.mockReturnValue(Promise.resolve(dataDB));
    const row = await db.get(dataDB.ID);
    expect(row).toEqual(dataDB);
  });

  test("el metodo get debe devolver error", async () => {
    try {
      const db = new DynamoDB(tableName);
      db.get.mockReturnValue(new ModelNotFoundException);
      await db.get(dataDB.ID);
    } catch (error) {
      expect(error).toBeInstanceOf(ModelNotFoundException);
    }
  });

})