class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(item){
        this.head=item;
        this.size=0;
    }
    insertAtEnd(item){
        let node = new Node(item);
        if(this.head==null){
            this.head=node;
        }else{
            let current=this.head;
            while(current.next !=null){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }
    insertAtBegining(item){
        let node= new Node(item);
        if(this.head==null){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    print(){
        let current=this.head;
        let index=0;
        while(current!=null){
            console.log(`Data : ${current.data} index ${index++}`);
            current=current.next;
        }
    }
    isEmpty(){
        if(this.head==null){
            console.log('empty');
        }else{
            console.log('not empty')
        }
    }
    sizeOfList(){
        console.log('size of list is :',this.size);
    }
}

let list= new LinkedList();
list.insertAtEnd(50)
list.insertAtEnd(54)
list.insertAtBegining(70)
list.isEmpty()
list.sizeOfList()
list.print()






