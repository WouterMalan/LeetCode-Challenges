//Given an integer num, return the number of steps to reduce it to zero.
///In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
function numberOfSteps(num) {
   let count = 0;
   while(num!==0){
         if(num%2===0){// if even
                num /= 2;// divide by 2
            }
            else{// if odd
                num -= 1;// subtract 1
            }
        count++;// increment count by 1
         }
    return count;
}
console.log(numberOfSteps(14));