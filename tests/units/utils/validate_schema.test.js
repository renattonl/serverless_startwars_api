
const validate_schema = require("../../../src/utils/validate_schema");

const schemaTest = {
  type: "object",
  properties: {
    id: {
      type: "integer"
    },
    name: {
      type: "string"
    }
  },
  required: [
    "id", "name",
  ],
  additionalProperties: false,
};

describe("validate_schema.js", () => {

  test("el tipo debe ser una funcion", () => {
    expect(typeof validate_schema).toBe("function");
  });

  test("debe devolver con errores", () => {
    const [has_error, errors] = validate_schema({}, schemaTest);
    expect(has_error).toBe(true);
    expect(Array.isArray(errors)).toBe(true);
  })

  test("debe devolver sin errores", () => {
    const [has_error, errors] = validate_schema({id: Date.now(), name: 'test'}, schemaTest);
    expect(has_error).toBe(false);
    expect(Array.isArray(errors)).toBe(true);
    expect(errors.length).toBe(0);
  })

});