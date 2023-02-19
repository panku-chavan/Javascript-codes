

let queue=function(size){
    this.size=size;
    this.arr=[];
    this.rear=0;
    this.front=0;
}

queue.prototype.enque=function(item){
    if(this.rear==this.size){
        console.log('Overflow');
    }
    this.arr[this.rear]=item;
    this.rear++;
}

queue.prototype.deque=function(){
    if(this.front==this.rear){
        console.log('Underflow');
    }
    let res=this.arr[this.front];
    this.front++;
    console.log(res);
}

let  Q=new queue(4);


Q.enque(7)
Q.enque(8)
Q.enque(9);
Q.enque(5)
Q.enque(5)
Q.deque();
Q.deque();
Q.deque();
Q.deque();
Q.deque();