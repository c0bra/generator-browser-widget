<% if (postcss) { %>import './main.css';<% } %>

<% if (babel) { %>export default function <%= camelModuleName %>(input, defaultPrefix = 'Prefixed') {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  const prefix = defaultPrefix;

  return `${prefix}: s${input}`;
};
<% } else { %>export default function <%= camelModuleName %>(input) {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  return `${input}`;
};<% } %>
