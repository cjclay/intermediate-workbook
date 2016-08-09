'use strict';

var assert = require('assert');

// ****
// Scope
// ****

// DO NOT MODIFY
var lastName = 'plaid';

// DO NOT MODIFY
function printFullName() {
  var firstName = 'bob';
  return firstName + lastName;
}

// DO NOT MODIFY
var firstName = 'susan';

// Problem 1:
// What is the value of firstName at this point in the file?
<<<<<<< HEAD
var valueOfFirstName = 'susan';

// Problem 2:
// What is the value of lastName at this point in the file?
var valueOfLastName = 'plaid';
=======
var valueOfFirstName;

// Problem 2:
// What is the value of lastName at this point in the file?
var valueOfLastName;
>>>>>>> 3d7c515ad4a72f63cd304227b2f596d024b6346b

// Problem 3:
// Fix the following function so that it returns the first argument
function returnTheFirstArgument(firstArgument) {
<<<<<<< HEAD
=======
  var firstArgument = 'bob';
>>>>>>> 3d7c515ad4a72f63cd304227b2f596d024b6346b
  return firstArgument;
}

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is scope?
//
// Your Answer Goes Here:
<<<<<<< HEAD
// Scope is the realm in which variables can be accessed. i.e variables with local scope(variables declared inside a function) are only available inside their functions. However, variables with global scope(variables declared outside a function) are available everywhere.
=======
//
>>>>>>> 3d7c515ad4a72f63cd304227b2f596d024b6346b
//


// ****
// Ternary Operator
// ****

// DO NOT MODIFY
var ternaryResult1 = true   ? 'first' : 'second';
var ternaryResult2 = false  ? 'first' : 'second';
var ternaryResult3 = 4      ? 'first' : 'second';
var ternaryResult4 = ""     ? 'first' : 'second';

// Problem 4:
// What is the value of ternaryResult1
<<<<<<< HEAD
var problemFourAnswer = 'first';

// Problem 5:
// What is the value of ternaryResult2
var problemFiveAnswer = 'second';

// Problem 6:
// What is the value of ternaryResult3
var problemSixAnswer = 'first';

// Problem 7:
// What is the value of ternaryResult4
var problemSevenAnswer = 'second';
=======
var problemFourAnswer;

// Problem 5:
// What is the value of ternaryResult2
var problemFiveAnswer;

// Problem 6:
// What is the value of ternaryResult3
var problemSixAnswer;

// Problem 7:
// What is the value of ternaryResult4
var problemSevenAnswer;
>>>>>>> 3d7c515ad4a72f63cd304227b2f596d024b6346b

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the ternary operator?  How does it differ from normal conditional statements?
//
// Your Answer Goes Here:
<<<<<<< HEAD
// It is an operator that takes in three operands and can be used in the place of a condional statement
=======
//
>>>>>>> 3d7c515ad4a72f63cd304227b2f596d024b6346b
//


// ****
// Arrays
// ****

// Problem 8:
// Create an empty array
<<<<<<< HEAD
var emptyArray = [];

// Problem 9:
// Create an array with 5 elements in it
var lengthFiveArray = [1,2,3,4,5];
=======
var emptyArray;

// Problem 9:
// Create an array with 5 elements in it
var lengthFiveArray;
>>>>>>> 3d7c515ad4a72f63cd304227b2f596d024b6346b

// DO NOT MODIFY
var nameArray = ['bob', 'fred', 'susan'];

// Problem 10:
// Replace the value 'fred' in nameArray with 'george'
<<<<<<< HEAD
nameArray[1] = 'george';
=======

>>>>>>> 3d7c515ad4a72f63cd304227b2f596d024b6346b
// DO NOT MODIFY
var threeByThreeArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Problem 11:
// Replace the center element of threeByThreeArray, which is 5, with something else.
<<<<<<< HEAD
threeByThreeArray[1][1] = 25;
// Problem 12:
// create a 2 by 2 (2 rows, 2 columns) nested array
var twoByTwoArray= [
  [2,4],
  [4,6]
];
=======

// Problem 12:
// create a 2 by 2 (2 rows, 2 columns) nested array
var twoByTwoArray;
>>>>>>> 3d7c515ad4a72f63cd304227b2f596d024b6346b

// ****
// Tests
// DO NOT MODIFY CODE BELOW!!!!!
// ****

describe('Lesson 3 Homework', function () {

  describe('Scope', function () {
    describe('Problem 1: firstName', function () {
      it('should be susan', function () {
        assert.equal(firstName, valueOfFirstName);
      });
    });

    describe('Problem 2: lastName', function () {
      it('should be plaid', function () {
        assert.equal(lastName, valueOfLastName);
      });
    });

    describe('Problem 3: returnTheFirstArgument()', function () {
      it('should return the first argument', function () {
        assert.equal(returnTheFirstArgument('bob'), 'bob');
        assert.equal(returnTheFirstArgument(4), 4);
        assert.equal(returnTheFirstArgument(null), null);
      });
    });
  });

  describe('Ternary Operator', function () {
    describe('Problem 4: ternaryResult1', function () {
      it('should be \'first\'', function () {
        assert.equal(ternaryResult1, problemFourAnswer);
      });
    });

    describe('Problem 5: ternaryResult2', function () {
      it('should be \'second\'', function () {
        assert.equal(ternaryResult2, problemFiveAnswer);
      });
    });

    describe('Problem 6: ternaryResult3', function () {
      it('should be \'first\'', function () {
        assert.equal(ternaryResult3, problemSixAnswer);
      });
    });

    describe('Problem 7: ternaryResult4', function () {
      it('should be \'second\'', function () {
        assert.equal(ternaryResult4, problemSevenAnswer);
      });
    });
  });

  describe('Arrays', function () {
    describe('Problem 8: emptyArray', function () {
      it('should be an empty array', function () {
        assert.equal(emptyArray.length, 0);
      });
    });

    describe('Problem 9: lengthFiveArray', function () {
      it('should have 5 elements', function () {
        assert.equal(lengthFiveArray.length, 5);
      });
    });

    describe('Problem 10: replace \'fred\' with \'george\'', function () {
      it('should be \'george\'', function () {
        assert.equal(nameArray[1], 'george');
      });
    });

    describe('Problem 11: replace the center element', function () {
      it('should not equal 5', function () {
        assert(threeByThreeArray[1][1] !== 5);
      });
    });

    describe('Problem 12: twoByTwoArray', function () {
      it('should be a 2x2 array', function () {
        assert(twoByTwoArray.length === 2);
        assert(twoByTwoArray[0].length === 2);
        assert(twoByTwoArray[1].length === 2);
      });
    });
  });
});