//palindrome linked list
//https://leetcode.com/problems/palindrome-linked-list/
let isPalindrome = function(head) {
  if(head === null) return true;
    let arr = [];
    let curr = head;
    while(curr !== null){
        arr.push(curr.val);
        curr = curr.next;
    }
    if(arr.join('') === arr.reverse().join('')) return true;
    return false;
}
console.log(isPalindrome([1,2,3,2,1]));