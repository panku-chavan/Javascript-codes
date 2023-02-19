class Node{
    constructor(item){
        this.data=item;
        this.next=null;
    }
}
// let node=new Node(2)
// console.log(node)

class LinkedList{
    constructor(item){
        this.head=item;
        this.size=0;
    }
    insert(item){
        let node= new Node(item);
        if(this.head==null){
            this.head=node;
        }else{
            let cur=this.head;
            while(cur.next !=null){
                cur=cur.next;
            }
            cur.next=node;
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
        let cur= this.head;
        let index= 0;
        while(cur != null){
            console.log(`Data : ${cur.data} Index : ${index++}`)
            cur=cur.next;
        }
    }
}
let list=new LinkedList();
list.insert(0)
list.insertAtBegining(20)
list.insert(80)
list.print()