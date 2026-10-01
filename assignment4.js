//1
function calculateAverage(a,b,c){
    return (a+b+c)/3
}

console.log(calculateAverage(10,20,30))

//2
function largest(x,y,z){
  
    if(x>y)
    {
        if(x>z){
            return x
        }
        else{
            return z
        }
    }
    else if(y>z)
    {
        return y
    }
    else{
        return z
    }

    

}

console.log(largest(3,1,8))

//3
function countVowels(str){
    let count=0
    for (const ch of str){
        if(ch =='a'|| ch=='e'||ch=='i'||ch=='o'||ch=='u'){
            count++
        }
    }

    return count
}

console.log(countVowels("aeior"))

//4
function calculateInterest(p,r,t){
    console.log((p*r*t)/100)
}

calculateInterest(5000,5,2)

//5
function findFactorial(f){
    let fact=1
for(let i=1;i<=f;i++){
fact =fact*i

}
console.log(fact)
}

findFactorial(10)