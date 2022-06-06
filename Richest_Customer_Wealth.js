// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
    let max = 0;
    for(let i =0; i<accounts.length; i++){//loop through each customer
        let sum =0;
        for(let j =0; j<accounts[i].length; j++){//loop through each bank
            sum += accounts[i][j];//add the amount of money in each bank to the sum
        }
        if(sum>max){//if the sum is greater than the max, set the max to the sum
            max = sum;
        }
    }
    return max;//return the max
}
console.log(maximumWealth([[1,2,3],[3,2,1]]));//should return 6