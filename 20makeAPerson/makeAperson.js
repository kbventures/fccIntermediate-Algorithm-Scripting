'use strict';

var Person = function (firstAndLast) {
  let firstName, lastName;
  [firstName, lastName] = firstAndLast.split(' ');

  this.getFullName = function () {
    return firstName + ' ' + lastName;
  };
  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.setFullName = function (fullName) {
    [firstName, lastName] = fullName.split(' ');
  };
  this.setFirstName = function (first) {
    firstName = first;
  };

  this.setLastName = function (last) {
    lastName = last;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.setFirstName('Haskell');
