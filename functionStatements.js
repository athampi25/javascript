//function to print the welcome message where ever necessary
//step1 function definition
function welcomeMessage(){
    console.log("Welcome to this firm")
}

welcomeMessage()

//parameterized Function
//function to add two numbers and print the result
//parameters passed in the function is called formal parameters which accept any type of data

function addNumbers(a,b){
    var c =a+b
    console.log(c)
}
//function calling - passing actual parameters
addNumbers(3,8)

// create a function that will return true if marks(static ) is >200 else false
function markEvaluation(){
let mark =300
return mark>200? true: false
}

console.log(markEvaluation())

// function to multiply two numbers and return the result

function findProduct(x, y){
    return x*y
}

console.log(findProduct(3,8))

// if mark function return true and product function is return >20 then print valid
function evaluateTwoFunctions(){
    let markResult= markEvaluation()
    let productResult = findProduct(3,8)
    if(markResult== true && productResult>20){
        console.log("Valid")
    }
    else{
        console.log("InValid")
    }
}

evaluateTwoFunctions()


//Arrow Functions(short key functions)
//modern JS introduced arrow functions to reduce the loc
// there is change in function definition and no change in function calling
//non parameterized
//here ==> is result and i is function name(anonymous function)
const i =() =>{
    console.log("This is non parameterized arrow function")
}

i()


// parameterized
// function to pass a number and return the square of number
const square=(s) => s*s;
console.log(square(6))
