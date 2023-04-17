import { createResource, } from "./createResource.js";
export const Movie = (config) => {
    return {
        get: createResource({
            fullPath: "/v2/movie/{movieId}",
            method: "GET",
        }, config),
        list: createResource({
            fullPath: "/v2/movie",
            method: "GET",
            type: "collection",
        }, config),
        quoteList: createResource({
            fullPath: "/v2/movie/{movieId}/quote",
            method: "GET",
            type: "collection",
        }, config),
    };
};
