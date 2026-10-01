class Bank{
//INHERITANCE
    //accountnumber, accountholdername, ifsc, minimumbalance, currentbalance
    constructor(accountNumber, accountHoldername, ifsc, minimumBalance, currentBalance){
        this.accountNumber=accountNumber
        this.accountHoldername =accountHoldername
        this.ifsc=ifsc
        this.minimumBalance=minimumBalance
        this.currentBalance=currentBalance
    }

    displayBankData(){
        console.log(this.accountNumber)
        console.log(this.accountHoldername)
        console.log(this.ifsc)
        console.log(this.minimumBalance)
        console.log(this.currentBalance)
    }


}

 //Inheritance
  //to connect child class to parent class use keyword extends
class SBIBank extends Bank{

   //bankname, branchname
   // add parent class parameters to the child class constructor as parameters
   constructor (accountNumber, accountHoldername, ifsc, minimumBalance, currentBalance,bankName,branchName){

    // use super keyword when child class has to access the properties and behaviors of parent class

super(accountNumber,accountHoldername,ifsc,minimumBalance,currentBalance)
this.bankName=bankName
this.branchName=branchName

   }
   //function overriding(parent and child has function with same name)
   displayBankData(){
    // use super keyword to reuse the display function from the parent class

    //super.displayBankData()
    console.log(this.bankName)
    console.log(this.branchName)
   }


}
//child class object creation
// let sbi = new SBIBank(56789,"farley","ICIC00089",5000,6527627,"sbitvm","kazhakoottam")
// sbi.displayBankData()// override

//to avoid overring we use super keyword 

//multilevel inheritance

//grandchild
class SBILife extends SBIBank{

    constructor(accountNumber, accountHoldername, ifsc, minimumBalance, currentBalance,bankName,branchName,lifeScheme){
        //constructor calling for child class    
        super(accountNumber, accountHoldername, ifsc, minimumBalance, currentBalance,bankName,branchName)
            this.lifeScheme=lifeScheme

    }

    displayLifeDetails(){
        super.displayBankData()// calling child function
        console.log(this.lifeScheme);
    }

}

let sbilife = new SBILife(1234,"ayra","SBIN000",4000,37463673,"SBI","Pattom","resp")
sbilife.displayLifeDetails()