"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const createResource_js_1 = require("./createResource.js");
const Movie = (config) => {
    return {
        get: (0, createResource_js_1.createResource)({
            fullPath: "/v2/movie/{movieId}",
            method: "GET",
        }, config),
        list: (0, createResource_js_1.createResource)({
            fullPath: "/v2/movie",
            method: "GET",
            type: "collection",
        }, config),
        quoteList: (0, createResource_js_1.createResource)({
            fullPath: "/v2/movie/{movieId}/quote",
            method: "GET",
            type: "collection",
        }, config),
    };
};
exports.Movie = Movie;
