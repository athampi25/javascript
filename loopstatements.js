//if we know the limit use for loop
//if the iteration is decided by any conditon then use while loop
//if the iteration is decided by condition but the statement to be executed atleast once then use do while
//for loop and while loop are called entry control loop
//for loop

//basic for loop and advanced for loop

//basic for loop

//3 parts:initialization(begining value of iteration) , condition , update

for(let i=0; i<=5; i++){
    console.log(i);
}

//print odd numbers from 1 to 10
for(let j=1;j<10; j=j+2){
    console.log(j);
}

// Advanced for loop
//1. for of iterates over the values of collections like arrays , strings etc.
let fruitarray =["apple","banana","mango","grapes"];

//works directly with the array values
for(const fruits of fruitarray){
    console.log(fruits);
}

//2. for in 
//dictionary - key value pairs and similar to javascript object

let student = {
    name:"John",
    age:16,
    gender:"male"}

    //for  in loop iterates over the object keys.
//key is a variable that holds the KEY of object student.
    for(const key in student){
        console.log(key,student[key])
    }

    //while loop
    //based on a condition and we dont know the limit of iteration
    //to print the characters of a string up to certain character.
    let name ="Sani"
    let counterVal =0 //initialization
    //condition
    while(counterVal<name.length){
        console.log(name[counterVal])
        //update (proper update to avaoid infinite loops)
        counterVal++
    }

    //Steps must be executed atleast once even if the condition fails
    //use Do while loop
    //Order: initialization, statements to be executes plus update, condition
    //do while loop also called as exit control loop

    var n =11
    do{
        console.log(n)
        n++
    }
    while(n<10)

        // if the string has i int it it needs to be skipped . Rest of the characters to be printed

        var item ="Spring"
        var newitem =""
        item.toLowerCase
        //item.toUpperCase
        console.log(item)
        for(const ch of item){
            if(ch=='i')
            {
                continue
            }
        console.log(ch)
        newitem = newitem+ch
        }
        console.log(newitem)

// break - if there is a break statement it will exit the loop
//continue - if there it will skip and go to next iteration


