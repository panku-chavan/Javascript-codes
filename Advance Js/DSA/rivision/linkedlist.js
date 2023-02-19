console.log('************Linked List**************')
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
    insertAtBegining(item){
        let node= new Node(item);
        if(this.head==null){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        
        this.size++;
        console.log(`${item} was inserted in begining of the list.`)
        this.print()

    }
    insertAtEnd(item){
        let node = new Node(item);
        if(this.head==null){
            this.head=node;
        }else{
            let current=this.head;
                while(current.next!=null){
                    current=current.next;
                }
                current.next=node;
        }
        this.size++;
        console.log(`${item} was inserted in end of the list.`)
        this.print()


    }
    insertInBetween(item,index){
        let node=new Node(item);
        let current=this.head;
        let previous=null;
        let i=0;
        while(i<index){
            previous=current;
            current=current.next;
            i++
        }
        previous.next=node;
        node.next=current;
        this.size++;
        console.log(`${item} was inserted at ${index} position of the list.`)
        this.print()

    }
    remove(item){
        let current=this.head;
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
        console.log(`${item} got removed...Now list is :`)
        this.size--;
        this.print()
    }
    isEpmpty(){
        if(this.size==0){
            console.log('List is empty...!');
        }else{
            console.log(`list is not empty, it has${this.size} elements.`)
        }
    }
    sizeOf(){
        console.log(this.size);
    }
    print(){
        let current=this.head;
        let index=0;
        if(this.head==null){
            console.log('list is empty.')
        }else{
            while(current!=null){
                console.log(`|Data:${current.data}|Index:${index++}|`)
                current=current.next;
        
            }
        }
    }
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
        console.log('List Got reverse now')
        this.print()
    }  
    
} 
let list= new LinkedList();
list.insertAtBegining(9)
list.insertAtBegining(8)
list.insertAtEnd(5)
list.insertAtEnd(4)
list.insertInBetween(7,2)
console.log('*******reverse***********')
list.reverse();
list.remove(7)