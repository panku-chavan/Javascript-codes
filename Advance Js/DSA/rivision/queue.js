class Queue{
    constructor(size){
        this.front=0;
        this.rear=0;
        this.size=size;
        this.arr=[];
    }
    Enqueue(item){
        if(this.rear==this.size){
            console.log('Overflow');
        }
        this.arr[this.rear]=item;
        this.rear++;
        console.log(`${item} is Added.`);
        this.print();
    }
    Dequeue(){
        if(this.front==this.rear){
            console.log('Underflow');
        }
        let res=this.arr[this.front];
        this.front++;
        console.log("removed",res);
        this.arr.shift();
        this.print()
    }
    print(){
        console.log(...this.arr)
    }
}

let q= new Queue(2);
q.Enqueue(9)
q.Enqueue(8)
q.Enqueue(7)
q.Dequeue()
q.Dequeue()
q.Dequeue()
q.Dequeue()