var a = 6
var b = 3
console.log(a + b) // Addition
console.log(a - b) // Subtraction
console.log(a * b) // Multiplication
console.log(a / b) // Division
console.log(a % b) // Modulus


//Comparison operator returns a boolean value

console.log(a<b)
console.log(a>b)
console.log(a<=b)
console.log(a>=b)
//checking equality
 let c="6"
console.log(a==c) //checks only value
console.log(a===c)//checks value and data type
console.log(a!=b) //not equal to
console.log(a!==c) //not equal to and not same data type

//logical operators AND, OR, Negation(NOT)

//to combine one or more conditions

console.log(a>b && a==c)// returns true if both conditions are true

//all other cases return false
console.log(b>a || a==c) //returns true if any one condition is true

//NOT operator reverse the boolean value of the condition\
console.log(!(a>b))

//Assignment operators
//used to assign values to variables
//basic assignment operator is =

//a=a+1, a+=1 are both same
//a=a-2, a-=2 are both same
//likewise for multiplication and division

//Increment or Decrement operators
//a++ is same as a=a+1
//a-- is same as a=a-1
//post and pre increment/decrement operators
//++a or --a is pre increment/decrement(increase/decrease and use)
//a++ or a-- is post increment/decrement(use and increase/decrease)
let d=++a
console.log(d, a) //pre increment

let e=a++
console.log(e, a) //post increment

let f=--b
console.log(f, b) //pre decrement

let g=b--
console.log(g, b) //post decrement

//Conditional Statements
//decisions based on conditions
//if , if esle, if else if ladder, switch case, ternary operators













