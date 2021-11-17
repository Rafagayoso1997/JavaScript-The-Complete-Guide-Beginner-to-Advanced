const numbers = [-20, 2, 100, 4, 5, 6];

const filteredNumbers = numbers.filter((number) => number > 5);
const mappedNumbers = numbers.map((number) => ({
  num: number,
}));

const reducedNumbers = numbers.reduce(
  (prevValue, curValue) => prevValue * curValue
);

console.log(filteredNumbers);
console.log(reducedNumbers);
console.log(mappedNumbers);

const findMax = (...numbers) => {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for (const number of numbers) {
    if (number > max) max = number;
    if (number < min) min = number;
  }

  return [max, min];
};

const [max, min] = findMax(...numbers);
console.log(max, min);
