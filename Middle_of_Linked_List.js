// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Example 1:
//Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

var middleNode = function(head) {
    let slow = head;// create a slow pointer
    let fast = head;// create a fast pointer
    while(fast && fast.next){// while fast pointer is not null and fast pointer next is not null
        slow = slow.next;// move slow pointer to the next node
        fast = fast.next.next;// move fast pointer to the next next node
    }
    return slow;// return the slow pointer
}
