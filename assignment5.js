

//1
class Mobile{
    constructor(brand,model,price){
        this.brand=brand
        this.model=model
        this.price=price
    }

    displayDetails(){
        console.log(this.brand)
         console.log(this.model)
          console.log(this.price)
    }
}

let mobile1 = new Mobile("Samsung","S24",60000)
mobile1.displayDetails()
let mobile2 = new Mobile("Samsung","S23",45000)
mobile2.displayDetails()
let mobile3 = new Mobile("Samsung","S25",100000)
mobile3.displayDetails()

//2
class Employee{

    constructor(name, experience){
        this.name=name
        this.experience=experience

    }
    displayExperience(){
        if(this.experience>3){
            console.log("Senior")
        }
        else if(this.experience>=1 & this.experience<=3){
            console.log("Junior")
        }
        else if(this.experience<1){
            console.log("Fresher")
        }

    }
}

let employee = new Employee("Joel",8)
employee.displayExperience()

//3


class Car{
    constructor(brand,model,speed){
        this.brand=brand
        this.model=model
        this.speed=speed
    }

    accelerate(){
        console.log(this.speed+10)
    }
    brake(){
        this.speed-=10
        if(this.speed<0){
            this.speed=0
        }
        console.log(this.speed)
    }

}

let car = new Car("Toyoto","Rav4",8)
car.accelerate()
car.brake()
