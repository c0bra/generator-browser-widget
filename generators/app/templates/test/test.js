const <%= camelModuleName %> = require('../dist/<%= moduleName %>');

test('can call method', () => {
  expect(<%= camelModuleName %>('foo')).toBe('foo');
});

test('non-string value throws', () => {
  expect(() => {
    <%= camelModuleName %>(5);
  }).toThrow();
});
