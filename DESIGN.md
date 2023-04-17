# Design

## Overall structure
Resource types are stored in `src/resources` (for example `src/resources/movie`)
Additionally, each resource type has a test stored in the `test/resources` directory.

## Extensibility and maintainability
The SDK has been designed in a way that makes it easy to add new resource types. New types would be added as entries in the `resources` folder.

Resource files should declare interfaces, arguments and make use of the common SDK abstractions such as `createResource` and the `ResourceCollectionResponse` interface.

In addition, the config can be overridden in numerous ways to allow fine-grained control at the request and global levels. This is used in testing to replace the `fetch` module by a `fetchMock` module.

## Notes
- Retry logic has not been implemented, but it has been exposed as an option in the config that defaults to 0.
- Autopaging (where all available entries from an endpoint are returned) has not been implemented, but would be a useful addition.