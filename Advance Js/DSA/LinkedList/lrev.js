class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

//create a linked list

class LinkedList{
    constructor(item){
        this.head=item;
        this.size=0;
    }
    // insert items in list
    //1---insert at begining
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
    //2--insert at the last of the list
    insertAtEnd(item){
        let node= new Node(item);
        if(this.head==null){
            this.head=node;
        }else{
            let current= this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }
    //3--insert in between the list using two pointers

    insertInBetween(item,index){
        let node= new Node(item);
        let current= this.head;
        let previous = null;
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

    //remove the item to list

    remove(item){
        let current=this.head;
        let previous=null;
        while(current != null){
            if(current.data==item){
                if(previous==null){
                    this.head=current.next;
                }else{
                previous.next=current.next;
                }
            }
            previous=current;
            current= current.next;

        }
        this.size--;
    }
    print(){
        let current= this.head;
        let index=0;
        while(current!=null){
            console.log(`Data:${current.data} Index:${index++}`);
            current=current.next;
        }
    }
    empty(){
        if(this.size===0){
            return true;
        }else{
            return false;
        }
    }
    reverse(){
        let current=this.head;
        let previous=null;
        while(current!=null){
            let n=current.next;
            current.next=previous;
            previous=current;
            current=n;
        }
        this.head=previous;
    }
}
let list = new LinkedList();
list.insertAtBegining(10);
list.insertAtEnd(20);
list.insertAtBegining(50);
list.insertInBetween(40,1);
list.print()

console.log("*********************")
list.reverse()
list.print()