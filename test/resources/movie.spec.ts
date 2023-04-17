import { describe, it, expect } from "vitest";
import { lotr } from "../../src/main";
import { fetchMock } from "../fetchMock";

const client = lotr("token", {
  httpClient: fetchMock,
});

describe("Movie Resource", () => {
  describe("get", () => {
    it("Sends the correct request", async () => {
      const resp = await client.movie.get({ movieId: "movieId" });
      expect(resp).to.deep.equal({
        url: "https://the-one-api.dev/v2/movie/movieId",
        method: "GET",
        timeout: 10000,
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json",
        },
      });
    });
  });

  describe("list", () => {
    it("Sends the correct request", async () => {
      const resp = await client.movie.list({});
      expect(resp).to.deep.equal({
        url: "https://the-one-api.dev/v2/movie?limit=10&page=1",
        method: "GET",
        timeout: 10000,
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json",
        },
      });
    });
  });

  describe("quoteList", () => {
    it("Sends the correct request", async () => {
      const resp = await client.movie.quoteList({ movieId: "movieId" });
      expect(resp).to.deep.equal({
        url: "https://the-one-api.dev/v2/movie/movieId/quote?limit=10&page=1",
        method: "GET",
        timeout: 10000,
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json",
        },
      });
    });
  });
});
