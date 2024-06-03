export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const newString = [];
  for (const string of set) {
    if (string.startsWith(startString)) {
      const idx = startString.length;
      newString.push(string.slice(idx));
    }
  }
  return newString.join('-');
}
