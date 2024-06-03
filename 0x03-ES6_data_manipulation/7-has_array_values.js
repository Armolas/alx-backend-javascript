export default function hasValuesFromArray(set, array) {
  if (array.length === 0) {
    return false;
  }
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
