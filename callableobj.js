//we can invoke callable object inside callable objects

function name(){
    var fullname= "Surbhi Zambad"

    function concat(name){
        return "Ms." + name
    }

    return concat(fullname)
}

//here we are calling the object property with the use of member access
function name1(fullname1){
    return fullname1.firstname + fullname1.lastname
}
console.log(name1({firstname:"Surbhi ", lastname:"Zambad"}))

// we can invole functions inside the argument
function name2(fullname2){
    return fullname2();
}
console.log(name2(function(){return "This is giving correct output"}))


//execution stack/main tread with Scope and Closue

function runExpr(){
    var a=10;
//here a and b are temporary symbols
    function add(b){
        return a+b
    }
    console.log(add(50),add(80))
}