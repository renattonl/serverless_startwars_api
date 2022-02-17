const response = require("../../../src/utils/response");

describe("utils/response.js", () => {
  test("El tipo de response debe ser una funcion", () => {
    expect(typeof response).toBe("function");
  })

  test("llamando al metodo response debe retornar un objecto", () => {
    const res = response({}, 200);
    expect(typeof res).toBe("object");
    expect(res.statusCode).toBe(200);
    expect(res.headers['Content-Type']).toBe('application/json');
    expect(res.body).toEqual(JSON.stringify({}));
  })

})