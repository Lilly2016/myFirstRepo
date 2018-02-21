# Javascript Prototypal classes

This feature allows you to make a new object by creating an instance of another object. The new object can be customised by adding or modifiying properties. 
> For example `Object.create(myObject.prototype)` inherits from `Object`, and adds properties from `myObject`
In classical systems, classification occurs prior to object creation. This means that every part of the system must be planned out. Realistically, it is not possible to plan every instance of a system before development beings. As a result, code refactoring and hotfixes occur regularly.
For JavaScript, prototypal inherticance is a strength because it allows functions to be adapted to evloving requirements of a program. As a result, time-consuming and risky refactoring is avoided. 

Crockford suggest that having level of indirection removed (i.e. classes) makes development easier.


References:
 * "JavaScript: The Good Parts" by Douglas Crockford, PluralSight, 2013
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain