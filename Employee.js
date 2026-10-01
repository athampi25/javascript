// class classname{
// constructor (special functions that help in the creation of objects)
// data
// behavior/functions


// }

//Requirement: Store all details of Employee- Employee id, name, salary, job level.
// // 2 functions 1. to display the details. 2. Based on the job level JL1, JL2,JL3 , increment the basic salary
// if the requirement has to store some values based on Entity, use constructors with parameters
//client location - variable should not be accessed outside empployee class( access modifier:
//  private) symbol for privitization is #
class Employee{
    //encapsulation 
    #clientLocation = "calgary"
constructor(empid,empName,jobLevel,salary){
// this keyword used to refer the current object
//this.empid - object reference
//empid - parameter
this.empid=empid
this.empName = empName
this.salary=salary
this.jobLevel=jobLevel

}

// in class no need for function keyword
displayDetails(){
    console.log(this.empid)
    console.log(this.empName)
    console.log(this.jobLevel)
    console.log(this.salary)
    console.log(this.getLocation())
}

updateSalary(){
    if(this.jobLevel==1){
        this.salary += 1000
            }
        else if(this.jobLevel==2){
            this.salary+=2000
        }
        else if(this.jobLevel==3){
            this.salary+=2500
        }
        else{
            this.salary=this.salary
        }
}

getLocation(){
    return this.#clientLocation
    //return since private variables or functions are suppose to be handled through functions only
}

}
//JS is executing line by line
let employee1 = new Employee(60589,"San",2,39000)
employee1.displayDetails()
employee1.updateSalary()
// updateSalary function globally updates the object (salary value)
employee1.displayDetails()