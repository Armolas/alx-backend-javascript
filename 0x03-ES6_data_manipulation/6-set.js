export default function setFromArray(array) {
  const set = new Set();
  for (const value of array) {
    set.add(value);
  }
  return set;
}
