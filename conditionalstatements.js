let a = 7
let b=2
if(b>a){
    console.log("This is valid")
}

if(b>a){
    console.log("This is valid")
}
else{
    console.log("This is not valid")
}

//if else if ladder when we need to check more than one condition

let age =8
if(age<13){
    console.log("child")
}
else if(age>=13 && age<=19){
    console.log("teenager")
}
else if(age>=20 && age<=59){
    console.log("young")
}
else{
    console.log("Senior citizen")
}

//Switch statement

let day = 3
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")
}

// ternary operator
//combination of ? and :
//shortkey of if else statement

//Syntax:condition?value if true: value if false;
age>=18?console.log("Adult"):console.log("Minor")

