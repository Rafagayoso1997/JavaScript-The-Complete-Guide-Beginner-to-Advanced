/*const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(5);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2, 3);
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
const moreNumbers = Array.from(listItems);
console.log(moreNumbers);

const hobbies = ['Programming', 'Sport'];
const personalData = [30, 'Rafa', { moreDetail: [] }];

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
  {
    name: 'Rafa',
    age: 24,
  },
];

for (const data of analyticsData) {
  if (Array.isArray(data)) {
    for (const dataPoints of data) {
      console.log(dataPoints);
    }
  } else {
    console.log(data);
  }
}*/

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies.splice(0);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// console.log(testResults.slice(1, 4));

// const personList = [
//   {
//     name: 'Rafa',
//     age: 24,
//   },
//   {
//     name: 'Test',
//     age: 25,
//   },
// ];

// const person = personList.find((person, index, personList) => {
//   return person.name === 'Luis';
// });

// console.log(person);

// const index = personList.findIndex((person, index, personList) => {
//   return person.name === 'Luis';
// });

// console.log(index);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// prices.forEach((price, index, prices) => {
//   const taxObject = { index: index, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(taxObject);
// });

// console.log(taxAdjustedPrices);
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// const taxprices = prices.map((price, index, prices) => {
//   const taxObject = { index: index, taxAdjPrice: price * (1 + tax) };
//   return taxObject;
// });

// console.log(prices);

// console.log(taxPrices);

/*const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices);

const filteredPrices = sortedPrices.filter((price, index, sortedPrices) => {
  return price > 6;
});

console.log(filteredPrices);

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);*/

const subtract = prices.reduce((prevValue, curValue) => prevValue - curValue);

//console.log(sum);
console.log(subtract);

console.log(Math.max(...prices));
