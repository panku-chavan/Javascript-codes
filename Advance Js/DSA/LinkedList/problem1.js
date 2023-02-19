 // Write a javascript program to find the length of loop in a linked list.

class Node{
    consrtuctor(data){
      this.data=data;
      this.next=null;
    }
  }
//   class LinkedList{
//     constructor(item){
//         this.head=item;
//     }
    
//   }

 function countNodes(n) {
    var res = 1;
     temp = n;
    while (temp.next != n) {
        res++;
        temp = temp.next;
    }
    return res;
}

function countNodesinLoop(list) {
var slow_p = list, fast_p = list;

while (slow_p != null && fast_p != null && fast_p.next != null) {
slow_p = slow_p.next;
fast_p = fast_p.next.next;


if (slow_p == fast_p)
  return countNodes(slow_p);
}

/* Return 0 to indicate that there is no loop */
return 0;
}
  head = new Node(1);
   head.next = new Node(2); 
   head.next.next = new Node(3);
    head.next.next.next = new Node(4);
     head.next.next.next.next = new Node(5);
  
  head.next.next.next.next.next = head.next;
  
  //console.log(head);
  let x=countNodesinLoop(head);
  console.log(x)