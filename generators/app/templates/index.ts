<% if (postcss) { %>import './main.css';<% } %>

export default function <%= camelModuleName %>(input, defaultPrefix = 'Prefixed') {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  const prefix = defaultPrefix;

  return `${prefix}: s${input}`;
};
