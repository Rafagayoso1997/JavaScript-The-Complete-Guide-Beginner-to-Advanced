const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: () => {
    alert('Hi there');
  },
};

person.isAdmin = true;
delete person.age;
console.log(person);
