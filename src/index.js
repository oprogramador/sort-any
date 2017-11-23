const comparators = {
  number: standardCompare,
  string: standardCompare,
  symbol: (a, b) => standardCompare(a.toString().slice(0, -1), b.toString().slice(0, -1)),
  array: compareArray,
  object: compareObject,
};

function getOrderByType (value) {
  if (typeof value === 'undefined') {
    return 0;
  }
  if (value === null) {
    return 1;
  }
  if (typeof value === 'boolean') {
    return 2;
  }
  if (typeof value === 'number' && isNaN(value)) {
    return 3;
  }
  if (typeof value === 'number') {
    return 4;
  }
  if (typeof value === 'string') {
    return 5;
  }
  if (typeof value === 'symbol') {
    return 6;
  }
  if (Array.isArray(value)) {
    return 7;
  }

  return 8;
}

function standardCompare (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

function compareArray (a, b) {
  if (first.length < second.length) {
    return -1;
  }
  if (second.length < first.length) {
    return 1;
  }

  return 0;
}

function compareObject (a, b) {
  const firstKeys = Object.keys(a);
  const secondKeys = Object.keys(b);
  if (firstKeys.length < secondKeys.length) {
    return -1;
  }
  if (secondKeys.length < firstKeys.length) {
    return 1;
  }

  return 0;
}

function compareSimple (first, second) {
  const firstOrder = getOrderByType(first);
  const secondOrder = getOrderByType(second);
  const differenceByType = firstOrder - secondOrder;
  if (differenceByType) {
    return differenceByType;
  }
  const type = typeof first;
  const comparator = comparators[type] || standardCompare;

  return comparator(first, second);
}

function compare(a, b) {
  return compareSimple(a, b);
}

function sortAny(array) {
  return array.sort(compare);
}

module.exports = sortAny;
