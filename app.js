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

console.log(car1.speed)
console.log(car1.engine.pistons)

// we can invoke the methods/functions using .

console.log(car1.drive())

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
