// let i : number =0
for(let i: number =0;i<=5;i++){
    console.log(i)
}

//traverse through array
//string [] means string array
//number [] means numeric array
const fruits : string [] = ["kiwi","orange","apple"]
//for of syntax same as in JS
for(const fruit of fruits){
    console.log(fruit)
}

//for in
for(const fruit in fruits){
    console.log(fruits[fruit])
}

//while loop

var x : number =0
while(x<=5){
    console.log(x)
    x++
}

//do while
var i : number =1
do{
console.log(i)
i++
}
while(i<=1)