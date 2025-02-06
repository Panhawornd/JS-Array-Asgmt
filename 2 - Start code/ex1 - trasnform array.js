// TODO:
// - Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of objects.
// - In the newly returned array, every object must have a val key and the input array's number as a value.

// EXAMPLE:
// - For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

/**
 * Transforms a list of numbers into a list of objects.
 * @param {array} listOfNumbers - A list of numbers.
 * @returns {array} A list of objects with each number wrapped in an object with a 'val' key.
 */
function transformToObjects(listOfNumbers) {
  return listOfNumbers.map(num => ({ val: num }));
}

// --------------------------------------------------------
// TESTS ZONE
// -------------------------------------------------------
console.log(JSON.stringify(transformToObjects([1, 2, 3]))); 
console.log(JSON.stringify(transformToObjects([44])));