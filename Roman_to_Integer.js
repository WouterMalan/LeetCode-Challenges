//roman to integer
function romanToInt(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = 0;
    for (let i =0; i<s.length; i++){// for each letter in the string
        let current = roman[s[i]];// get the value of the current letter
        let next = roman[s[i+1]];// get the value of the next letter
        if(current < next){// if the current letter is less than the next letter
            sum -=current;// subtract the value of the current letter from the sum
        }
        else{
            sum +=current;// add the value of the current letter to the sum
        }
}
return sum;// return the sum
}
console.log(romanToInt("IV"));


