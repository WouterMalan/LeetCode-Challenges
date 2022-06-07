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

//  var middleNode = function(head) {
//      let count = 0;

//      const dummyHead = new ListNode(null);
//         dummyHead.next = head;// create a dummy head node
//         let head1 = dummyHead;// create a head1 pointer
//         let head2 = dummyHead;// create a head2 pointer

//         while(head1.next!==null){// while head1 pointer is not null
//             head1 = head1.next;// move head1 pointer to the next node
//             count++;// add 1 to the count
//         }
//     console.log(count);
//     if(count %2 === 0){// if the count is even
//         count++;// add 1 to the count
//     }
//     let i = 0;
//     while(i<count/2){// while i is less than the count
//         head2 = head2.next;// move head2 pointer to the next node
//         i++;// add 1 to i
//     }
//     return head2;// return the head2 pointer
//  }