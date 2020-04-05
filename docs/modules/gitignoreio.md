[gitignore.io](../README.md) › [gitignoreio](gitignoreio.md)

# Module: gitignoreio

## Index

### Interfaces

* [GitignoreApiResponse](../interfaces/gitignoreio.gitignoreapiresponse.md)

### Functions

* [fetchAll](gitignoreio.md#const-fetchall)
* [fetchConfig](gitignoreio.md#const-fetchconfig)
* [listAll](gitignoreio.md#const-listall)

## Functions

### `Const` fetchAll

▸ **fetchAll**(): *Promise‹[GitignoreApiResponse](../interfaces/gitignoreio.gitignoreapiresponse.md)[]›*

Fetches all available config files and their content.

**Returns:** *Promise‹[GitignoreApiResponse](../interfaces/gitignoreio.gitignoreapiresponse.md)[]›*

Parsed API response.

___

### `Const` fetchConfig

▸ **fetchConfig**(`names`: string[]): *Promise‹string›*

Fetches concated .gitignore config.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`names` | string[] | Array of config names we want to fetch.  |

**Returns:** *Promise‹string›*

___

### `Const` listAll

▸ **listAll**(): *Promise‹string[]›*

Lists all keywords supported by [gitignore.io](https://gitignore.io).

**Returns:** *Promise‹string[]›*
