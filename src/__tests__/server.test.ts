import { connectDB } from "../server.js";
import db from "../config/db.js";
import { vi } from "vitest";

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
