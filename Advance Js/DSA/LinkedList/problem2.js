class Node
{
    constructor(val)
    {
        this.data = val;
        this.ptr = null;
    }
}
     

     
function isPalindrome(head)
{
    var slow = head;
    var ispalin = true;
    var stack = [];
 
    while (slow != null)
    {
        stack.push(slow.data);
        slow = slow.ptr;
    }
 
    while (head != null)
    {
        var i = stack.pop();
        if (head.data == i)
        {
            ispalin = true;
        }
        else
        {
            ispalin = false;
            break;
        }
        head = head.ptr;
    }
    return ispalin;
}
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(3);
let six = new Node(2);
let seven = new Node(1);
one.ptr = two;
two.ptr = three;
three.ptr = four;
four.ptr = five;
five.ptr = six;
six.ptr = seven;
let condition = isPalindrome(one);
console.log(condition);