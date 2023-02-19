class queue{
    constructor(size){
        this.front=0;
        this.rear=0;
        this.arr=[];
        this.size=size;
    }
enque(item){
    if(this.rear==this.size){
        console.log('Overflow');
    }
    this.arr[this.rear]=item;
    this.rear++;
}

deque(){
    if(this.rear==this.front){
        console.log('Underflow');
    }

    let res= this.arr[this.front];
    this.front++;
    console.log(res);
}
}

let q=new queue(5);
q.enque(5);q.enque(4);q.enque(2);
q.enque(1);q.enque(0); q.enque(8);

q.deque();
q.deque()
q.deque()
q.deque()
q.deque()
q.deque()
q.deque()