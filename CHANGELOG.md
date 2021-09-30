# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.1.4] - 2021-09-30

Resolve several security vulnerabilities in dependencies. Add this CHANGELOG

### Changed

- upgraded all dependencies to latest versions
- changed documentation generation
- change tests so they work with jest-circus

## [0.1.3] - 2021-01-11

Resolve several security vulnerabilities in dependencies. Add this CHANGELOG

### Changed

- fixed inproperly generated npm package from previous build (fixed dist folder)

## [0.1.2] - 2021-01-11

Resolve several security vulnerabilities in dependencies. Add this CHANGELOG

### Added

- TESTS using Jest framework
- .prettierrc config file

### Changed

- [highlight.js security vulnerablity](https://github.com/stefanjarina/gitignore.io/security/dependabot/yarn.lock/highlight.js/closed)
  Bump typedoc from 0.17.3 to 0.17.8 to get newer dependency of highlight.js

### Fixed

- [DEPENDABOT PULL REQUEST #3](https://github.com/stefanjarina/gitignore.io/pull/3)
  Bump axios from 0.19.2 to 0.21.1
- Bug with wrong interface description GitignoreApiResponse as it did not match the structure received from server
