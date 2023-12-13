const request = require("supertest");
const app = require("../app");


describe("GET /api/movies/:id", () => {
    it("should return a movie", async () => {
      const movieId="0"
        const response = await request(app).get("/api/movies/${movieId}");
  
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
    });
  });