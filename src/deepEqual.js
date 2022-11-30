function deepEqual(obj1, obj2) {
  // Check if both objects are null or undefined
  if (obj1 === null || obj1 === undefined) {
    return obj2 === null || obj2 === undefined;
  }

  // Check if both objects are primitives (string, number, boolean)
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  // Check if the number of keys is the same for both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all the keys and their values are equal
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  // All checks passed, objects are deeply equal
  return true;
}

module.exports = deepEqual;