import { SDKConfig } from "../config";
import { ResourceCollectionResponse } from "./createResource.js";
export interface Movie {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
}
export interface Quote {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
    id: string;
}
export declare const Movie: (config: SDKConfig) => {
    get: (args: {
        movieId: string;
    } & import("./createResource.js").ResourceCollectionArgs, config?: SDKConfig | undefined) => Promise<ResourceCollectionResponse<Movie>>;
    list: (args: import("./createResource.js").ResourceCollectionArgs, config?: SDKConfig | undefined) => Promise<ResourceCollectionResponse<Movie>>;
    quoteList: (args: {
        movieId: string;
    } & import("./createResource.js").ResourceCollectionArgs, config?: SDKConfig | undefined) => Promise<ResourceCollectionResponse<Quote>>;
};
