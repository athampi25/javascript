class Student
{//ABSTRACTION
    // studentid, studentname, semester, s1mark,s2mark, s2mark
    constructor(studentid,studentname,semester,s1mark,s2mark,s3mark){
        this.studentid=studentid
        this.studentname=studentname
        this.semester=semester
        this.s1mark=s1mark
        this.s2mark=s2mark
        this.s3mark=s3mark

    }

    //# tag for the function to privitize(Abstraction)
    #calculateGrade(){
        //sum of marks, and if marks >500 grade A+, if marks between 400 and 500 B+, if marks between 350 and 400 B grade
        //otherwise Failed
        let sum = this.s1mark+this.s2mark+this.s3mark
        if(sum>500){
            console.log("Grade A")
        }
        else if(sum>=400 & sum<=500){
            console.log("Grade B+")
        }
        else if(sum>=350 & sum<400){
            console.log("Grade B")
        }
        else{
            console.log("Failed")
        }


    }

    displayDetails(){
        console.log(this.studentid)
        console.log(this.studentname)
        console.log(this.semester)
        console.log(this.s1mark)
        console.log(this.s2mark)
        console.log(this.s3mark)
        this.#calculateGrade() //abstraction
    }
}
//object creation
let student = new Student(3456,"Nan","S3",250,100,179)
student.displayDetails()