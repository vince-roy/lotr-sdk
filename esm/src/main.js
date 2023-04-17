import fetch from "node-fetch";
import { Movie } from "./resources/movie.js";
export function lotr(apiKey, userConfig = {}) {
    const clientConfig = {
        apiKey,
        httpClient: fetch,
        maxNetworkRetries: 0,
        timeout: 1000,
        host: "the-one-api.dev",
        protocol: "https",
        ...userConfig,
    };
    return {
        movie: Movie(clientConfig),
    };
}
