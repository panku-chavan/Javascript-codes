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
   insertAtBeg(item){
      let node=new Node(item);
      if(this.head==null){
         this.head=node;
      }else{
         node.next=this.head;
         this.head=node;
      }
      this.size++;
   }
   insertAtEnd(item){
      let node= new Node(item);
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
   insertInBet(item,index){
      let node=new Node(item);
      let current=this.head;
      let previous=null;
      let i=0;
      while(i<index){
         previous=this.head;
         current=current.next;
         i++;
      }
      previous.next=node;
      node.next=current;
      this.size++;
   }
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
   print()
   {
      let current=this.head;
      let index=0
      while(current!=null){
         console.log(`Data:${current.data} Index:${index++}`);
         current=current.next;
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
   }
}

let list=new LinkedList()
list.insertAtBeg(9)
list.insertAtEnd(8)
list.insertInBet(7,1)
list.remove(9)
list.insertAtBeg(10)
list.insertAtEnd(2)
list.insertInBet(4,1)
list.reverse()
list.print()