import fetch from "node-fetch";
import { SDKConfig } from "./config";
import { Movie } from "./resources/movie.js";

export function lotr(apiKey: string, userConfig: Partial<SDKConfig> = {}) {
  const clientConfig: SDKConfig = {
    apiKey,
    httpClient: fetch,
    maxNetworkRetries: 0,
    timeout: 10000,
    host: "the-one-api.dev",
    protocol: "https",
    ...userConfig,
  };

  return {
    movie: Movie(clientConfig),
  };
}
