function taskFunction(){
    console.log("Type Script function")
}

//we can also specify the return type
//if we dont have anything to return void
taskFunction()
function voidFunction(): void{
    console.log("This is void return type function")
}

voidFunction()
//parameterized function with return type number
function add(a: number,b: number): number{

    return (a+b)

}
console.log(add(4,5))