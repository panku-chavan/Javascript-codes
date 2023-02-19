
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let node1= new Node(2);
console.log('node1',node1);
let node2= new Node(3);
//console.log('node2',node2);
node1.next=node2;
//console.log('list1',node1)
let node3= new Node(5);
//console.log('node3',node3)
node2.next=node3;
//console.log('list 2',node1)

let head= node1;

let current=head;

console.log(head);

let temp= current.next;
console.log(temp)

let temp1= current.next.next;
console.log(temp1)