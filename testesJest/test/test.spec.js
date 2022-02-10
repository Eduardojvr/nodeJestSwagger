const request = require("supertest");
const app = require("../src/app");
const { Pessoa } = require("../src/entidade/Pessoa");

describe("Testes de Pessoa", () => {
  test("Testa getPessoa", async () => {
    const response = await request(app).get("/pessoa/getUsuario");
    expect(response.statusCode).toBe(200);
  });

  test("Testa put", async () => {
    const response = await request(app).put("/pessoa/2");
    expect(response.statusCode).toBe(200);
  });

  test("Testa Delete", async () => {
    const response = await request(app).delete("/pessoa/2");
    expect(response.statusCode).toBe(200);
  });

  test("Testa Post", async () => {
    const response = await request(app).post("/pessoa/");
    expect(response.statusCode).toBe(200);
  });
});