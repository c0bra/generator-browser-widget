# <%= repoName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>) [![npm version](https://badge.fury.io/js/<%= repoName %>.svg)](https://badge.fury.io/js/<%= repoName %>)<% if (coveralls) { %> [![coveralls](https://img.shields.io/coveralls/github/<%= githubUsername %>/<%= repoName %>/master.svg)](https://coveralls.io/github/<%= githubUsername %>/<%= repoName %>?branch=master)<% } %> [![cypress.io](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

> <%= moduleDescription %>


## Install

```
$ npm install <%= moduleName %>
```


## Usage

```js
import <%= camelModuleName %> from '<%= moduleName %>';

<%= camelModuleName %>('things');
```


## API

### <%= camelModuleName %>(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## Development

### Docs

Run the docs development server

    npm run docs:dev

Open http://localhost:8080

Deploy the docs to github pages:

    ./docs/docs.sh

## License

MIT © [<%= name %>](<%= website %>)
