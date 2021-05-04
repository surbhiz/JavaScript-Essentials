//this is used to call window object but it can be changed with different strategies
// this calls the object just above it

//here this will return object as the object vaiable is above this if we call method member
var object={
    prop:this,
    method: function(){return this;}
}
console.log(object)
console.log(object.method())
//here this will return window object
var array=[
    this,
    function(){return this;}
]
//here this will return window object 
function global(){
    return this;
}
console.log(global())
//we can use call object and invoking function

console.log(global.call(object))