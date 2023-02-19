//1- create Node
//2- create Linked List
//3- functions - 1) insertAtBegining()
//               2) insertAtEnd()
//               3) insertInBetween()
//               4) remove()
//               5) reverse()
//               6) print()
//               7) isEmpty()
//               8) size()

//1-- create Node

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

//2-- create a LinkedList

class LinkedList{
    constructor(item){
        this.head=item;
        this.size=0;
    }

// 3--- functions  1) insertAtBegining()
insertAtBegining(item){
    let node = new Node(item);
    if(this.head==null){
        this.head=node;
    }else{
        node.next=this.head;
        this.head=node;
    }
    this.size++;
}

//               2) insertAtEnd()

insertAtEnd(item){
    let node = new Node(item);
    if(this.head==null){
        this.head=node;
    }else{
        let current=this.head;
        while(current.next != null){
            current=current.next;
        }
        current.next=node;
    }
    this.size++;
}
//               3) insertInBetween()
insertInBetween(item,index){
    let node= new Node(item);
    let current=this.head;
    let previous=null;
    let i=0;
    while(i<index){
        previous=current;
        current=current.next;
        i++;
    }
    previous.next=node;
    node.next=current;
    this.size++;
}
//               4) remove()
remove(item){
    let current= this.head;
    let previous=null;
    
    while(current!=null){
        if(current.data==item){
            if(previous==null){
                this.head=current.next;
            }else{
                previous.next=current.next;
            }
           
        }
        previous=current;
        current=current.next;
    }

  this.size--;
}
//               5) reverse()
reverse(){
    let current=this.head;
    let previous=null;
    while(current!=null){
        let next=current.next;
        current.next=previous;
        previous=current;
        current=next;
    }
    this.head=previous;
}
//               6) print()
print(){
    let current=this.head;
    let index=0;
    while(current!=null){
        console.log(`|Data:${current.data}|Index:${index++}|`);
        current=current.next;
    }
}
//               7) isEmpty()
isEmpty(){
    if(this.size==0){
        console.log('List is empty');
    }else{
        console.log(`list is not empty, there are ${this.size} items in list.`);
    }
}
//               8) size()
sizeOfList(){
    console.log(`size of list is : ${this.size}`);
}
}

let list= new LinkedList();
list.insertAtBegining(5)
list.insertAtBegining(8)
list.insertAtEnd(5)
list.insertInBetween(6,1)

list.print()
console.log('---------------------------')
list.reverse()
list.remove(8)
list.print()

list.remove(8)
