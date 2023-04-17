import { SDKConfig } from "../config";

export interface ResourceCollectionArgs {
  limit?: number;
  offset?: number;
  page?: number;
  [key: string]: any;
}

export interface ResourceCollectionResponse<ReturnType> {
  docs: ReturnType[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}

export interface ResourceSpec {
  fullPath: string;
  method: "POST" | "GET" | "PUT" | "DELETE";
  type?: "collection" | "single";
}

function maybeReplaceVariable(
  path: string,
  variable: string,
  value: string | number
): string {
  const searchString = `{${variable}}`;
  if (path.includes(searchString)) {
    return path.replace(searchString, value + "");
  }
  return path;
}

function prepareArgs(
  args: Partial<ResourceCollectionArgs>,
  type?: ResourceSpec["type"]
) {
  if (type === "collection") {
    if (args.offset === undefined) {
      return {
        limit: 10,
        page: 1,
        ...args,
      };
    }
    return {
      limit: 10,
      ...args,
    };
  }
  return args;
}

function prepareQueryParams(resourcePath: string, args: object) {
  // exclude path parameters from query params
  const filters = Object.keys(args || {}).reduce(
    (filters: any, key: string) => {
      const searchString = `{${key}}`;
      if (resourcePath.includes(searchString)) {
        return filters;
      }
      filters[key] = (args as Record<string, any>)[key];
      return filters;
    },
    {}
  );

  return new URLSearchParams(filters).toString();
}

export function createResource<ReturnType, Args = {}>(
  spec: ResourceSpec,
  configRoot: SDKConfig
) {
  return function (args: Args & ResourceCollectionArgs, config?: SDKConfig) {
    config = config || configRoot;
    const resourcePath = Object.keys(args || {}).reduce((resourcePath, key) => {
      const value = (args as any)[key];
      if (typeof value === "string" || typeof value === "number") {
        return maybeReplaceVariable(resourcePath, key, value);
      }
      return resourcePath;
    }, spec.fullPath);

    const queryParams = prepareQueryParams(
      spec.fullPath,
      prepareArgs(args || {}, spec.type)
    );

    const url = new URL(
      resourcePath,
      `${config.protocol}://${config.host}`
    ).toString();

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
        return data as ReturnType;
      });
  };
}
