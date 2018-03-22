const <%= camelModuleName %> = require('../dist/<%= moduleName %>');

test('can call method', () => {
  expect(<%= camelModuleName %>('foo')).toBe('foo');
});
