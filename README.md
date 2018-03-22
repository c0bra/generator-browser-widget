# generator-browser-module

> Scaffold out a browser module

Inspiration from Sindre's [generator-nm](https://github.com/sindresorhus/generator-nm)

# Features

* Build & bundle with [rollup](https://github.com/rollup/rollup)
* Unit test with [jest](https://facebook.github.io/jest/)
* E2E test in the browser with [cypress.io](https://www.cypress.io/) (Useful for testing widgets and visual components, but JS code can be tested too)
* Publish code coverage to [coveralls.io](https://coveralls.io)
* Local development server with live-reload using [live-server](https://www.npmjs.com/package/live-server)

# Install

    $ npm install --global yo generator-browser-module

# Usage

Scaffold your module with the generator:

    $ yo browser-module

Run the local development server. Your browser and cypress will open up.

    $ npm run dev

Other npm scripts

    $ npm run build
    $ npm run test # test with jest
    $ npm run e2e # run cypress e2e tests

# License

MIT © [Brian Hann](https://brianhann.com)
