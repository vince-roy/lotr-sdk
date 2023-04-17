"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResource = void 0;
function maybeReplaceVariable(path, variable, value) {
    const searchString = `{${variable}}`;
    if (path.includes(searchString)) {
        return path.replace(searchString, value + "");
    }
    return path;
}
function prepareArgs(args, type) {
    if (type === "collection") {
        if (args.offset === undefined) {
            return Object.assign({ limit: 10, page: 1 }, args);
        }
        return Object.assign({ limit: 10 }, args);
    }
    return args;
}
function prepareQueryParams(resourcePath, args) {
    // exclude path parameters from query params
    const filters = Object.keys(args || {}).reduce((filters, key) => {
        const searchString = `{${key}}`;
        if (resourcePath.includes(searchString)) {
            return filters;
        }
        filters[key] = args[key];
        return filters;
    }, {});
    return new URLSearchParams(filters).toString();
}
function createResource(spec, configRoot) {
    return function (args, config) {
        config = config || configRoot;
        const resourcePath = Object.keys(args || {}).reduce((resourcePath, key) => {
            const value = args[key];
            if (typeof value === "string" || typeof value === "number") {
                return maybeReplaceVariable(resourcePath, key, value);
            }
            return resourcePath;
        }, spec.fullPath);
        const queryParams = prepareQueryParams(spec.fullPath, prepareArgs(args || {}, spec.type));
        const url = new URL(resourcePath, `${config.protocol}://${config.host}`).toString();
        const urlWithQueryParams = queryParams
            ? `${url}?${queryParams.toString()}`
            : url;
        return config
            .httpClient(urlWithQueryParams, {
            method: spec.method,
            headers: {
                Authorization: `Bearer ${config.apiKey}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            return data;
        });
    };
}
exports.createResource = createResource;
