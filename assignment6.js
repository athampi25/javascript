class Employee{
    #attendance =35

    markAttendance(){
        
        console.log(this.getAttendance()+1)
    }

    getAttendance(){
        return this.#attendance
    }

}

let emp= new Employee()
emp.markAttendance()

class Notification{

    #send(){
        console.log("Welcome")
    }

    pushNotification(){
        console.log("This is push notification")
        this.#send()
    }
    emailNotification(){
        console.log("This is email notification")
        this.#send()
    }

     smsNotification(){
        console.log("This is sms notification")
        this.#send()
    }
}

let noti = new  Notification()
noti.emailNotification()
noti.pushNotification()
noti.smsNotification()