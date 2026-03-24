/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const d = new ListNode();
    let cur=d;
    console.log("d:",d);
    console.log("cur:", cur, "val:",cur.val)
    let c = 0;
    while(l1 !== null || l2 !== null || c !== 0){
        let sum = c;
        console.log("sum:", sum, "c:",c);
        if (l1!==null) {
            sum+=l1.val;
            l1=l1.next;
        }

        if (l2!==null) {
            sum+=l2.val;
            l2=l2.next;
        }

        c = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }
    return d.next;
};