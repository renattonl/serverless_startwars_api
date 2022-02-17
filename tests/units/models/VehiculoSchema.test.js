
const VehiculoSchema = require("../../../src/models/VehiculoSchema");

describe("VehiculoSchema.js", () => {

  test("debe de tener el type object & sus propiedades", () => {
    const {type, properties, required, additionalProperties} = VehiculoSchema
    expect(typeof VehiculoSchema).toBe("object");
    expect(type).toBeDefined();
    expect(type).toBe("object");
    expect(properties).toBeDefined();
    expect(typeof properties).toBe("object");
    expect(required).toBeDefined();
    expect(Array.isArray(required)).toBe(true);
    expect(additionalProperties).toBe(false);
  })
});