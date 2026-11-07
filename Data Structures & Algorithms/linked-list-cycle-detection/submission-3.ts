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
     * @return {boolean}
     */


    /**
     * theory: on even or odd lists, 
     *  [1,2], [1,2,*3,4,5], [1,2,*3,4]
     */
    hasCycle(head: ListNode | null): boolean {
        if (!head || !head.next){return false}
        let slow = head
        let fast = head.next
        while (slow !== null){
            if (slow === fast){
                return true
            }
            if (fast){
                fast = fast?.next?.next || null
            }
            slow = slow.next
        
        }
        return false
    }
}
