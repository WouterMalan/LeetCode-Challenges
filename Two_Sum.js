// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.
var twoSum = function(nums, target) {
    let hash = {};//hash table to store the values
    for(let i=0; i<nums.length; i++){//loop through the array of numbers and store the values in the hash table
        let diff = target - nums[i];//find the difference between the target and the current number
        if(hash[diff] != undefined){//if the difference is already in the hash table
            return [hash[diff] , i];//return the index of the difference and the current index
        }
        hash[nums[i]] = i;//store the current number in the hash table with the current index as the value
    }
};
console.log(twoSum([2,7,11,15], 9));