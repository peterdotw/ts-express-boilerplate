import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return 200 OK", async (done) => {
    request(app).get("/").expect(200, done);
  });

  it("should return matching body", async (done) => {
    request(app).get("/").expect("Hi from TypeScript!", done);
  });
});
