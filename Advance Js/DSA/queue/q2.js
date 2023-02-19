console.log("this is queue implementation");

class queue{
    constructor(size){
        this.size=size;
        this.arr=[];
        this.front=0;
        this.rear=0;
        this.count=0;
    }
enqueue(item){
       if(this.rear==this.size){
        console.log("overflow");
       }
       this.arr[this.rear]=item;
       this.rear++;
       this.count++;
       console.log(this.count);
}
dequeue(){
    if(this.front==this.rear){
        console.log('Underflow');
    }
    let res=this.arr[this.front];
    this.front++;
    console.log(res);
}

}

let q=new queue(2);
q.enqueue(2)
q.enqueue(2)
q.enqueue(0)
q.dequeue()
q.dequeue()
q.dequeue()
