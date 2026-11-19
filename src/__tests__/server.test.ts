import request from "supertest";
import server, { connectDB } from "../server.js";
import db from "../config/db.js";
import { vi } from "vitest";
describe("GET /api", () => {
  it("should send back a json response", async () => {
    const res = await request(server).get("/api");

    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
    // expect(res.body.msg).toBe("from api");

    expect(res.status).not.toBe(404);
    expect(res.body.msg).not.toBe("desde api");
  });
});

vi.mock("../config/db");

describe("connectDB", () => {
  it("should handle database connection error", async () => {
    vi.spyOn(db, "authenticate").mockRejectedValueOnce(
      new Error("There was an error connecting to the database"),
    );
    const consoleSpy = vi.spyOn(console, "log");

    await connectDB();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("There was an error connecting to the database"),
    );
  });
});
