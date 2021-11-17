// const ids = new Set([1, 2, 3, 4, 5]);
// console.log(ids);

// for (const entry of ids.values()) {
//   console.log(entry);
// }

const person1 = { name: 'Max' };
const person2 = { name: 'Rafa' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

console.log(personData);

const map = new WeakMap();
