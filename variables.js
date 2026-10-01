console.log("This is Java Script language")
var x = 5
console.log(x)
console.log(typeof x)
//redeclaration of variable x
var x = 11
console.log(x)
//reassigning the value of variable x
x= 27
console.log(x)

let y  =56
console.log(y)
//redeclaration of variable y is not allowed
//let y ="abc"
//reassigning the value of variable y
y = "abc"
console.log(y)
//const variable z is a constant variable and its value cannot be changed
const z = 100
console.log(z)

//const z = 200
console.log(z)
 console.log(typeof y)

var flag = true
console.log(flag)
console.log(typeof flag)

var a
console.log(a)
console.log(typeof a)

let numbers =[1,2,3,4,5]
console.log(numbers)
console.log(typeof numbers)

console.log(numbers.length)// prints the length of the array
console.log(numbers.indexOf(3))// prints the index of the element 3 in the array. indexof is built in method of array which returns the index of the element
console.log(Array.isArray(numbers))// checks if the variable is an array or not. returns true if it is an array else false
console.log(Array.isArray(flag))

console.log(numbers.includes(6))// checks if the element 6 is present in the array and returns true if it is else false
numbers.pop()// removes the last element from the array
console.log(numbers)

numbers.push(6)// adds the element 6 at the end of the array
console.log(numbers)

numbers.unshift('abc')// adds the element 'abc' at the beginning of the array
console.log(numbers)

numbers.shift()// removes the first element from the array
console.log(numbers)

//Object in Java Script
var student ={id:101,name:"Sani",course:"JavaScript"}
// Java Script object is a collection of key value pairs. key cannot be repeated in the object. key is also called property of the object. value can be of any data type. value can be repeated in the object.
console.log(student)

console.log(student["id"])// prints the value of the key id in the object student

console.log(student.id)// prints the value of the key id in the object student
console.log(student.name)// prints the value of the key name in the object student
console.log(student.course)// prints the value of the key course in the object student

//add a new key value pair in the object student
student.semester=2
console.log(student)
student.name="Sanvika"// reassigning the value of the key name in the object student
console.log(student)

// to store multiple objects in a single variable we can use array of objects. array of objects is an array which contains multiple objects. each object can have different key value pairs. each object can have different data types as value. each object can have different number of key value pairs.  
let studentdata =[{id:101,name:"Sani",course:"JavaScript"},
                  {id:102,name:"Nannu",course:"Groovy"},
                  {id:103,name:"Ammu",course:"Python"},
                  {id:104,name:"kannan",course:"Java"}

]
console.log(studentdata)

//to access the value of the key name in the first object of the array studentdata
console.log(studentdata[2].id)// prints the value of the key id in the first object of the array studentdata
//JSON Object.
let employee ={"id":201,"name":"Sani","salary":50000,"department":"IT"}
console.log(employee)

console.log(employee.department)// prints the value of the key department in the object employee
//Json Array.
let employeeData = [{"id":201,"name":"Sani","salary":50000,"department":"IT"},
                    {"id":202,"name":"Nannu","salary":60000,"department":"HR"},
                    {"id":203,"name":"Ammu","salary":70000,"department":"Finance"}]
console.log(employeeData)
console.log(employeeData[1].salary)// prints the value of the key salary in the second object of the array employeeData
