//An object literal is an expersive way of creating an object
var obj = {
    foo: bar
}

//A meta API was added in ES5 which gave developers control over where the object inherits from
//The feature also enabled developers to control over 3 attributes - read/write, enumerability and config
//For more info - https://docs.microsoft.com/en-us/scripting/javascript/reference/object-defineproperties-function-javascript
var anotherObj = Object.defineProperties(
    Object.create(Object.prototype), {
        foo: {
            value: someValue,
            writable: true,
            enumerable: true, 
            configurable: true
        }
    }
)