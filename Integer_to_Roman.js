//integer to roman

    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    
    var intToRoman = function(N) {
        let ans = ""
        for (let i = 0; N; i++)// loop through the array of values and roman numerals until N is 0
        {
            while (N >= val[i]){// while N is greater than the value at index i
                ans += rom[i]// add the roman numeral at index i to the answer
                N -= val[i]// subtract the value at index i from N
            }
        }
        return ans
        
    };
console.log(intToRoman(11));
