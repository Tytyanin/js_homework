// 1
console.log('#1')

var counter = (function () {
  var count = 10;
  return function (num) {
    count = num !== undefined ? num : count;
    return count++;
  }
}());

console.log(counter());
console.log(counter());
console.log(counter(23));
console.log(counter());
console.log(counter(1000));
console.log(counter());
console.log(counter());

// 2
console.log('#2(constructor)')

var Person = {
  constructor: function (name,age) {
    this.name = name;
    this.age = age;

    return this;
  },
  great: function () {
    console.log('Hi, my name is' + this.name);
  }
};

var jhon = Object.create(Person).constructor('Jhon', 35);
var bob = Object.create(Person).constructor('Bob', 25);
var mary = Object.create(Person).constructor('Mary', 25);

console.log(jhon);
console.log(bob);
console.log(mary);

console.log(Person);

// 2
console.log('#2')

var greet = function(){
  return 'Hi! My name is ' + this.name + '. I am ' + this.age;
}

var firstPerson = {
  name: 'John',
  age: 30,
  greet: greet
}

var secondPerson = {
  name: 'Bob',
  age: 18,
  greet: greet
}

console.log(firstPerson.greet());
console.log(secondPerson.greet());

// 3

var anotherPerson = {
  name: 'Jeck',
  age: 21,
  _weight: 85,
  get weight(){
    return this._weight;
  },
  set weight(value){
    this._weight = value;
  },
  greet: greet
}

console.log(anotherPerson.weight);
console.log(anotherPerson);