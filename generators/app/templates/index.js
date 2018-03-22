
export default function <%= camelModuleName %>(input) {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  return `${input}`;
};
