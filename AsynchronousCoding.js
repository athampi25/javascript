//function and perform asynchronously
//add 2 numbers and return result

async function add(a,b){
    return await Promise.resolve(a+b)
}

//console.log(add(4,6)) // gives pending

add(4,9).then(result=>{console.log(result)})