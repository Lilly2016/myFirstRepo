# Javascript Numbers

* Only 1 type of number
* 64-bit floating point
* IEEE-754 (aka "Double")
* There is no 'int' type
* It has number literals where 0.01024e4 = 1024.00 = 1024
* 9007199254740992 === 9007199254740992 + 1
* Binary fractions can only be approximated. Inherited from IEEE standard.
    * (a + b) + c === a + (b + c) // false
    * var x = 0.2 + 0.1; // x will be 0.30000000000000004
* You can add new methods to Number.prototype to increase functionality of the language
* First class objects 
    * Can be stored in a variable
    * Pass as parameter
    * Return from a function
    * Stored in an object
    * Can have methods
* Infinity is returned if an operation returns a value outside of the largest possible number
    * var x =  2 / 0; // x will be Infinity
    * var y = -2 / 0; // y will be -Infinity
    * typeof Infinity; // returns "number"
* NaN (Not a Number) is returned if a number is not a legal number
    * E.g. var x = 5 / "someString" // returns NaN
    * If NaN is the input, the result will always be NaN
    * It does not equal anything
        * NaN === NaN // false
        * NaN !== NaN // true
* Strings can have numeric content
    * var x = "100", y = "2", z = x * y // z will be 200

References:
 * "JavaScript: The Good Parts" by Douglas Crockford, PluralSight, 2013
 * "JavaScript Numbers" by [w3schools](https://www.w3schools.com/js/js_numbers.asp)