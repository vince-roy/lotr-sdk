import fetch from "node-fetch";

export interface SDKConfig {
  apiKey: string;
  httpClient: typeof fetch;
  maxNetworkRetries: 0;
  timeout: number;
  host: string;
  protocol: "http" | "https";
}
