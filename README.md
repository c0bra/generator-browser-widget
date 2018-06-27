# generator-browser-widget

> Yeoman generator for creating reusable browser widgets

Inspiration from Sindre's [generator-nm](https://github.com/sindresorhus/generator-nm)

# Features

* Build & bundle with [rollup](https://github.com/rollup/rollup)
* Transpile with [babel](https://babeljs.io)
* Or with [TypeScript](https://www.typescriptlang.org/)
* Build components with [svelte](http://svelte.technology)
* Handle your CSS with [PostCSS](postcss)
* Unit test with [jest](https://facebook.github.io/jest/)
* E2E test in the browser with [cypress.io](https://www.cypress.io/) (Useful for testing widgets and visual components, but JS code can be tested too)
* Publish code coverage to [coveralls.io](https://coveralls.io)
* Local development server with live-reload using [live-server](https://www.npmjs.com/package/live-server)
* Create a static [gh-pages](https://pages.github.com/) site with [VuePress](https://vuepress.vuejs.org/)

# Install

    $ npm i -g yo generator-browser-widget

# Usage

Scaffold your module with the generator:

    $ yo browser-widget

Run the local development server. Your browser and cypress will open up.

    $ npm run dev

Other npm scripts

    $ npm run build
    $ npm run test # test with jest
    $ npm run e2e # run cypress e2e tests

# License

MIT © [Brian Hann](https://brianhann.com)
