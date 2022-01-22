gitignore.io

# gitignore.io

## Table of contents

### Interfaces

- [GitignoreApiResponse](interfaces/GitignoreApiResponse.md)

### Functions

- [fetchAll](README.md#fetchall)
- [fetchConfig](README.md#fetchconfig)
- [listAll](README.md#listall)

## Functions

### fetchAll

▸ `Const` **fetchAll**(): `Promise`<[`GitignoreApiResponse`](interfaces/GitignoreApiResponse.md)\>

Fetches all available config files and their content.

#### Returns

`Promise`<[`GitignoreApiResponse`](interfaces/GitignoreApiResponse.md)\>

Parsed API response.

#### Defined in

[index.ts:39](https://github.com/stefanjarina/gitignore.io/blob/5763091/src/index.ts#L39)

___

### fetchConfig

▸ `Const` **fetchConfig**(`names`): `Promise`<`string`\>

Fetches concated .gitignore config.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | `string`[] | Array of config names we want to fetch. |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.ts:54](https://github.com/stefanjarina/gitignore.io/blob/5763091/src/index.ts#L54)

___

### listAll

▸ `Const` **listAll**(): `Promise`<`string`[]\>

Lists all keywords supported by [gitignore.io](https://gitignore.io).

#### Returns

`Promise`<`string`[]\>

#### Defined in

[index.ts:21](https://github.com/stefanjarina/gitignore.io/blob/5763091/src/index.ts#L21)
