function combine<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const numberResult = combine([1, 2, 3], [4, 5, 6]);
console.log(numberResult); // Output: [1, 2, 3, 4, 5, 6]

const stringResult = combine(['hello', 'world'], ['typescript', 'bug']);
console.log(stringResult); // Output: ['hello', 'world', 'typescript', 'bug']

const mixedResult = combine([1, 'a', true], [2, 'b', false]);
console.log(mixedResult); // Output: [1, 'a', true, 2, 'b', false] 