
const DynamoDB = require("../../../src/libs/DynamoDB");

describe("DynamoDB.js" , () => {

  test("El tipado de la clase debe ser function", () => {
    expect(typeof DynamoDB).toBe("function");
    const db = new DynamoDB('');
    expect(typeof db.create).toBe("function");
    expect(typeof db.get).toBe("function");
  });

  const tableName = 'vehiculosTable';
  const dataDB = {
    ID: Date.now().toString(),
    name: "test",
  };

  test("el metodo create debe devolver ok", async () => {
    expect.assertions(1);
    try {
      const db = new DynamoDB(tableName);
      const row = await db.create(dataDB);
      expect(row).toEqual(dataDB);
    } catch (error) {
      console.log("error write dynamodb", error);
    }
  });

  test("el metodo create debe devolver error", async () => {
    expect.assertions(1);
    try {
      const db = new DynamoDB(tableName);
      await db.create({...data, id: Date.now()});
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  test("el metodo get debe devolver ok", async () => {
    try {
      const db = new DynamoDB(tableName);
      const row = await db.get(dataDB.ID);
      expect(row).toEqual(dataDB);
    } catch (error) {
      console.log("error get dynamodb", error);
    }
  });

  test("el metodo get debe devolver error", async () => {
    try {
      const db = new DynamoDB(tableName);
      await db.get('ABC123');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

})