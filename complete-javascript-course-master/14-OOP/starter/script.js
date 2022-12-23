'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // BAD PRACTICE mai creare un metodo dentro un costruttore
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }

const jonas = new Person('Jonas', 1991);

// 1. New {} is created (object)
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
