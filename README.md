# gitignore.io

A Javascript SDK for [https://gitignore.io](https://gitignore.io)

## Installation

```sh
npm install --save gitignore.io
# -or-
yarn add gitignore.io
```

## Usage

Documentation is available [here](./docs/README.md)

- Import library

```js
const api = require('gitignore.io');
```

- Get list of all available configs
  - Returns an `Array` of config names

```js
api.listAll().then(list => console.log(list));

// returns
//
// [
//   '1c',                '1c-bitrix',           'a-frame',
//   'actionscript',      'ada',                 'adobe',
//   'advancedinstaller', 'adventuregamestudio', 'agda',
//   'al',                'alteraquartusii',     'altium',
//   ......
```

- Fetch all available configs with metadata
  - Returns an `Object` of all configs

```js
api.fetchAll().then(allConfigs => console.log(allConfigs));

// returns
//
// {
//   certificates: {
//     contents: '\n### certificates ###\n*.pem\n*.key\n*.crt\n*.priv\n',
//     name: 'certificates',
//     key: 'certificates',
//     fileName: 'certificates.gitignore'
//   },
//   vaadin: {
//     contents: '\n### Vaadin ###\n.vaadin-designer\n.designer\n',
//     name: 'Vaadin',
//     key: 'vaadin',
//     fileName: 'Vaadin.gitignore'
//   },
//   ........
```

- Fetch a final config file for specified config names
  - Returns a `String` of config

```js
api.fetchConfig(['node', 'code', 'linux']).then(config => console.log(config));

// returns
//
// ### Code ###
// .vscode/*
// !.vscode/settings.json
// !.vscode/tasks.json
// !.vscode/launch.json
// !.vscode/extensions.json

// ### Linux ###
// *~

// # temporary files which can be created if a process still has a handle open of a deleted file
// .fuse_hidden*
```

## TODO

- [ ] Proper error handling
- [x] Rewrite to Typescript
- [x] Add typings
- [x] Add browser support
- [x] Publish to npm
- [ ] Add CLI
