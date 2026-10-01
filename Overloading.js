class Numbers{

    // overloading can be implemented without a class
// this way of overloading will not work in JS
    // add(a,b){
    //     return a+b
    // }

    
    // add(a,b,c){
    //     return a+b+c
    // }

    //overloading in JS
    //1.
    add(a,b,c){
        if(arguments.length===2){
            return arguments[0]+arguments[1]
        }
        if(arguments.length===3){return arguments[0]+arguments[1]+arguments[2]}
        
    }

    //2. Default valued functions
    //takes the default values when values not passed in the function call
    addition(a,b=0,c=0){
        return a+b+c

    }
}

let num= new Numbers()
console.log(num.add(2.7,3))
console.log(num.add(4,5,1))
// calling Default valued functions
console.log(num.addition(3,7,9))
console.log(num.addition(3,7))
console.log(num.addition(3))