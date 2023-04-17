# Lord of the Rings Node.js Library
[![Version](https://img.shields.io/npm/v/lotr-sdk-vroy.svg)](https://www.npmjs.com/package/lotr-sdk-vroy)

The Lord of the Rings Node.js library provides an easy way to access information about the Lord of the Rings from the Lord of the Rings API.

## Requirements
Node.js version 12 or higher

## Installation
Use one of the following commands in your favorite terminal:

```sh
npm install lotr-sdk-vroy
# or
yarn add lotr-sdk-vroy
```

## Usage
You'll need an access key from [the-one-api](https://the-one-api.dev) account area here: [https://the-one-api.dev/sign-up](https://the-one-api.dev/sign-up).

**Note: the page parameters for lists did not seem to be working on the the-one-api server as of 2023-04-17**

```js
const lotr = require('lotr-sdk-vroy')('your_key_from_one_api');

lotr.movie.list({})
  .then(resp => console.log(resp.docs))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import lotr from 'lotr-sdk-vroy';
const lotrClient = lotr('some_api_key_from_one_api')

const {docs: movies} = await lotrClient.movie.list({})

console.log(movies);
```

### Usage with TypeScript
```ts
import lotr from 'lotr-sdk-vroy';
const lotrClient = lotr('some_api_key_from_one_api')

const {docs: movies} = await lotrClient.movie.list({})
// movies will have typese
console.log(movies);
```

## Configuration
The following configuration options are available. They can be set on a per-request basis and on a global basis.

| Option              | Default            | Description                                                                                                                                                                                                                                       |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host`              | `'the-one-api.dev'` | Host that requests are made to.                                                                                                                                                                                                                   |
| `httpClient`         | `fetch` from `node-fetch`             | the fetch/http client to use for the request                                                                                                                                                                                    |
| `maxNetworkRetries` | 0                  | The amount of times a request should be retried                                                                                                                                                                             |
| `protocol`          | `'https'`          | `'https'` or `'http'`. Do not use `http` in production |
| `timeout`           | 10000              | [Maximum time each request can take in ms.]                                                                                                                                                                 |

## Development
Run all tests:
```sh
$ npm install
$ npm test
```

