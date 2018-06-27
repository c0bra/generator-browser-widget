<% if (postcss) { %>import './main.css';<% } %><% if (svelte) { %>
import Hello from './components/Hello.svelte';<% } %>

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

<% if (svelte) { %>
document.addEventListener('DOMContentLoaded', () => {
  const Hello = new Hello({
    target: document.querySelector('body'),
  });
});
<% } %>
