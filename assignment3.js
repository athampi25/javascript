//1
let a=-5
if(a>0){
    console.log("positive")
}
else if(a<0){
    console.log("negative")
}
else{
    console.log("zero")
}

//2
let m =6
let n=9
if(m>n){
    console.log("Greater number is "+m)
}
else{
    console.log("Greater number is "+n)
}
//3

let perform= '/'
let c=7
let d=14
switch (perform) {
    case '+':
        console.log(c+d);
        break;
    case '-':
        console.log(c-d);
        break;
    case '*':
        console.log(c*d);
        break;
    case '/':
        console.log(c/d);
        break;
    default:
        console.log('Invalid operation');
}

//4
let totalbill = 0;
let units =130

if(units >= 50 && units <= 100){
    totalbill = units * 5;
}
else if(units > 100 && units <= 200){
    totalbill = units * 7;
}
else if(units > 200 && units <= 300){
    totalbill = units * 10;
}
else if(units > 300){
    totalbill = units * 15;
}
console.log("Total bill for " + units + " units is: " + totalbill);


//5
for(let i=10; i>=1; i--){
    console.log(i);
}


//6
for (let i = 1; i <= 10; i++) {
    if(i % 3 === 0) {
        console.log(i + " is divisible by 3");
    }
}
