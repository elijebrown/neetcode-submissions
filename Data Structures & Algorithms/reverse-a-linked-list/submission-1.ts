/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        //edge case, empty list or 1
        if (!head){return null}
        if (!head.next){return head}
        // prev starts at current
        // save current.next to var
        // if (curr === head) curr.next = null EDGE CASE
        // ELSE curr.next = prev
        // then move on -> current = next (var)
        // we end at the end of the list, so when curr.next === null, return curr
        
        let prev = head
        let curr = head
        let next
        while (curr.next !== null){
            next = curr.next
            if (curr === head){
                curr.next = null
            }
            else {
                curr.next = prev
            }

            // move on:
            prev = curr
            curr = next
            
        }
        curr.next = prev
        return curr
    }
}
