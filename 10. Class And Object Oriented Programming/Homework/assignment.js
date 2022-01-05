class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  calculateValue() {
    const value = this.length / this._price;
    return value.toFixed(2);
  }

  summary() {
    return `The ${this.title} course has a length of ${
      this.length
    } weeks and a price of ${
      this.price
    }. This course will help you to improve your skills in ${
      this.title.split(':')[0]
    }`;
  }

  get price() {
    return `\$${this._price}`;
  }

  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('The price must be a positive value');
      //throw 'The price must be a positive value';
    }
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    return "I'm publishing something...";
  }
}

const courseA = new Course('JavaScript: The complete guide', 10, 9.99);

const courseB = new Course('SQL: The complete guide', 7, 19.99);

console.log('Course A');
console.log(courseA);
console.log(courseA.calculateValue());
console.log(courseA.summary());

console.log('Course B');
console.log(courseB);
console.log(courseB.calculateValue());
console.log(courseB.summary());

const practicalCourse = new PracticalCourse(
  'Java: the complete guide',
  5,
  20.99,
  20
);
const theoreticalCourse = new TheoreticalCourse(
  'Python: the complete guide',
  6,
  3.99
);

console.log('Practical Course');
console.log(practicalCourse.calculateValue());
console.log(practicalCourse.summary());
console.log(practicalCourse.numOfExercises);
practicalCourse.price = 10;
console.log(practicalCourse.price);

console.log('Theoretical Course');
console.log(theoreticalCourse.publish());
