const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});
describe("GET /api/movies/:id", () => {
  it("should return movie.id", async () => {
    const movieId = 1;
    const response = await request(app).get(`/api/movies/${movieId}`);
    console.log(response.headers);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });

  it("should return 404 for non-existing movie id", async () => {
    const nonExistingMovieId = 0;
    const response = await request(app).get(
      `/api/movies/${nonExistingMovieId}`
    );

    expect(response.status).toEqual(404);
  });
});