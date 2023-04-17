import fetch, { Response, RequestInfo, RequestInit } from "node-fetch";

const fetchMock = (
  url: { href: string } | string | RequestInfo,
  init?: RequestInit
) => {
  return Promise.resolve(
    new Response(JSON.stringify({ url, ...init }), { status: 200 })
  );
};

fetchMock.isRedirect = fetch.isRedirect;

export { fetchMock };
