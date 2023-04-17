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
export declare function createResource<ReturnType, Args = {}>(spec: ResourceSpec, configRoot: SDKConfig): (args: Args & ResourceCollectionArgs, config?: SDKConfig) => Promise<ReturnType>;
