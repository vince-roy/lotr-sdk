import { SDKConfig } from "../config";
import {
  ResourceCollectionResponse,
  createResource,
} from "./createResource.js";

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

export const Movie = (config: SDKConfig) => {
  return {
    get: createResource<ResourceCollectionResponse<Movie>, { movieId: string }>(
      {
        fullPath: "/v2/movie/{movieId}",
        method: "GET",
      },
      config
    ),
    list: createResource<ResourceCollectionResponse<Movie>>(
      {
        fullPath: "/v2/movie",
        method: "GET",
        type: "collection",
      },
      config
    ),
    quoteList: createResource<
      ResourceCollectionResponse<Quote>,
      { movieId: string }
    >(
      {
        fullPath: "/v2/movie/{movieId}/quote",
        method: "GET",
        type: "collection",
      },
      config
    ),
  };
};
