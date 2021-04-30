//defining objects
var car={
    //these are properties with key: values
    color : "red",
    speed : 200,
    //this is methods inside object
    drive : function(){return "drive";}

};
//defining arrays
var shoppingList=[
    "Apple", 
    "Orange",
    "Pear"
]

var car1={
    //these are properties with key: values
    color : "red",
    speed : 200,
    //this is object inside object
    engine: {
        size: 2.0,
        pistons: [{maker:"BMW"},{maker:"BMW2"}]
    },
    //we can add methods inside the objects
    drive: function(){return "drive"}

};
//we can access members inside the object as well as object inside object using . (member access)

console.log(car1.speed);
//another method to get the property
console.log(car1["speed"])
// we can extract the property by adding the value inside variable as well
var pointer= "speed"
console.log(car1[pointer])

console.log(car1.engine.pistons);

// we can invoke the methods/functions using .

console.log(car1.drive());
//another method to invoke the functions
console.log(car1["drive"]())

// to access members in arrays we need to use computed member access
console.log(car1.engine.pistons[0]);
console.log(car1.engine.pistons[0].maker);

//change the property of certain member
car1.color="black";
console.log(car1["color"])
car1.speed*=4;
console.log(car1.speed)

// add different member in the object
car1.model="2020"
console.log(car1)

car1.stop = function(){return "stop"}
console.log(car1)

//delete the member from the object
delete car1.model
console.log(car1)
delete car1.stop
console.log(car1)
//arrays can have strings, integers, arrays and objects inside it
var array=[
    "string",
    100,
    ["embed",200],
    {
        car: ["toyota","Honda"]
    },
    //we can have functions inside arrays without the object name
    function(){return "drive"}
]

// to run the function using computed memory access
console.log(array[4]())
console.log(array[3].car[0])

//change the property in array
console.log(array[0]="Hello")
//see the length of an array
console.log(array.length)
// delete element from an array from start and it returns the value it deleted
console.log(array.shift())
//delete element from an array from end and it return the value it deleted
console.log(array.pop())
//add element in the beginning of an array and it return the length
console.log(array.unshift("Hello","New members","are added", 0,1,2.2, function(){return "welcome"}))
//add element in the end of an array and it return the length
console.log(array.push("Hello","New members","are added", 0,1,2.2, function(){return "welcome"}))
//delete specific elements in an array and it return how many elements are deleted and which are deleted
console.log(array.splice(10, 7))//index,how many values to delete after the index position
//add specific elements in an array and it return how many elements are deleted and which are deleted
console.log(array.splice(10, 0, "This is new"))//index,how many values to delete, new value to add
