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
    // log({l1, l2});
    
    // 1. make single digit out of l1 => a
    // 2. make single digit out of l2 => b
    // 3. sum = a + b
    // 4. reverse the digits of sum and make linked list => l3
    // 5. return l3
    
    let a = BigInt(reverseDigit(linkedListToDigit(l1)));
    let b = BigInt(reverseDigit(linkedListToDigit(l2)));
    
    // log({a, b});
    const sum = `${a + b}`.split('');
    
    // log({sum});
    const l3 = sum.reduce((acc, val)=> {
        acc = acc === null ? new ListNode(val) : new ListNode(val, acc);
        
        // log(acc);
        
        return acc;
    }, null);
    
    return l3;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function linkedListToDigit(linkedList) {
    let digit = '';
    while(linkedList && (linkedList.next !== undefined)) {
        digit += `${linkedList.val}`;
        linkedList = linkedList.next;
    }
    return digit;
}

function reverseDigit(digit) {
    return digit.split("").reverse().join("");
}

const log = (...data) => console.log(...data);
