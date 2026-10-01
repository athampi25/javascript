//predeclare variable name and data types

class firstClass{
     age : number 

     constructor (age :number){
        this.age =age
     }

    
     check(){
        if(this.age>18){
            console.log("Eligible")
        }
        else{
            console.log("Not eligible")
        }
     }
    
}

let f = new firstClass(34)
f.check()