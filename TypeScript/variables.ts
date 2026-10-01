var age : number = 48
//var age = 34 -> this is also valid
//age = true -> compile error
// condition age >18 print eligible
//age <13 - child, 13 and 20 teenage 20 and 60 - adult else senior citizen
if(age <13){
    console.log("Child")
}
else if(age >=13 && age <20) {

    console.log("Teeange")
}
else if(age >=20 && age<60){
    console.log("Adult")
}
else{
    console.log("Senior Citizen")
}

console.log(age)
