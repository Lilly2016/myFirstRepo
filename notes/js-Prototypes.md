# Javascript Prototypal classes

This feature means that you can make a new object by creating an instance of another object. The new object that you've created can be cusomised, by adding or modifiying properties. 
> For example `Object.create(myObject.prototype)`, which inherit from `Object`, and adds properties from `myObject`
* In classical systems, everything first has to be classified, which means that every part of the system must be planned out (which it never is)
* Therefore, prototypal inherticance is a strength of JavaScript because it allows functions to be adapted to evloving requirements of a program
* Having level of indirection removed (classes) makes dev easier


References:
 * "JavaScript: The Good Parts" by Douglas Crockford, PluralSight, 2013
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain