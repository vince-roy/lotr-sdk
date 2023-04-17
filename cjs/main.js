"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lotr = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const movie_js_1 = require("./resources/movie.js");
function lotr(apiKey, userConfig = {}) {
    const clientConfig = Object.assign({ apiKey, httpClient: node_fetch_1.default, maxNetworkRetries: 0, timeout: 1000, host: "the-one-api.dev", protocol: "https" }, userConfig);
    return {
        movie: (0, movie_js_1.Movie)(clientConfig),
    };
}
exports.lotr = lotr;
