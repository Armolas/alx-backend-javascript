#!/usr/bin/node

function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return (Math.round(a) + Math.round(b));
  }
  if (type === 'SUBTRACT') {
    return (Math.round(a) - Math.round(b));
  }
  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return (Math.round(a) / Math.round(b));
  }

  return 'type can only be SUM, SUBTRACT, or DIVIDE';
}

module.exports = calculateNumber;
