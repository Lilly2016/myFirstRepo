# Delegation
* If a method does not existing on the object it was called from, the parent object will be called to, and so on
* Each new object only needs to contain the material necessary to distinguish it from the object it inherited from
* 'new' prefix operator 
```
	function new(func, args) {
		var that = Object.create(func.prototype), //calls the prototype of the func
		result = func.apply(that,args); //gives the original obj with new args
		return (typeof result === 'object' && result) || that; //returns the new obj or the original
}
```

References:
 * "JavaScript: The Good Parts" by Douglas Crockford, PluralSight, 2013
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain