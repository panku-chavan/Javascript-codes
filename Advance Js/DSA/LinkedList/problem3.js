class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(item){
        this.head=item;
    }
    add(item){
        let node= new Node(item);
        if(this.head==null){
            this.head=node;
        }else{
            let current=this.head;
            while(current.next!=null){
               current=current.next;
            }
            current.next=node;
        }
    }
    print(){
        let current=this.head;
        let arr=[];
        while(current!=null){
            //console.log(current.data);
            arr.push(current.data);
            current=current.next;
        }
        console.log(...arr)
    }
    reverse(){
        let current = this.head;
        let previous=null;
        while(current!=null){
            let next=current.next;
            current.next=previous;
            previous=current;
            current=next;
        }
        this.head=previous;
    }
}

let list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.print()