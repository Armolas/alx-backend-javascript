export default function iterateThroughObject(reportWithIterator) {
  let text = '';
  for (const idx in reportWithIterator) {
    if (idx < reportWithIterator.length - 1) {
      text += `${reportWithIterator[idx]} | `;
    } else {
      text += reportWithIterator[idx];
    }
  }

  return text;
}
