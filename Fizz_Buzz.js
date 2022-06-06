let fizzBuzz = (n) =>{
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if(i %3==0 && i %5==0){
            arr.push("FizzBuzz");
        }
        else if(i %3==0){
            arr.push("Fizz");
        }
        else if(i %5==0){
            arr.push("Buzz");
        }
        else{
            arr.push(i);
        }
    }
    //change the numbers to strings
    return arr.map(x => x.toString());
}
console.log(fizzBuzz(15));