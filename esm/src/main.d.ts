import { SDKConfig } from "./config";
import { Movie } from "./resources/movie.js";
export declare function lotr(apiKey: string, userConfig?: Partial<SDKConfig>): {
    movie: {
        get: (args: {
            movieId: string;
        } & import("./resources/createResource").ResourceCollectionArgs, config?: SDKConfig | undefined) => Promise<import("./resources/createResource").ResourceCollectionResponse<Movie>>;
        list: (args: import("./resources/createResource").ResourceCollectionArgs, config?: SDKConfig | undefined) => Promise<import("./resources/createResource").ResourceCollectionResponse<Movie>>;
        quoteList: (args: {
            movieId: string;
        } & import("./resources/createResource").ResourceCollectionArgs, config?: SDKConfig | undefined) => Promise<import("./resources/createResource").ResourceCollectionResponse<import("./resources/movie.js").Quote>>;
    };
};
