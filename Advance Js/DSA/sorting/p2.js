console.log('................selection sort.........................');

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        let temp=arr[i];
          arr[i]=arr[min];
        arr[min]=temp;
    }
}
let arr=[2,3,1,6,0];
console.log(`Sorted array is : ${arr}`);
selectionSort(arr);
console.log(`Unsorted array is ${arr}`);

console.log("....................Bubble sort........................")
let bubbleSort=(arr)=>{
    let isSwap=false;
   for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            isSwap=true;
        }
    }
    if(!isSwap){
        break;
    }
   }
}
let arr1=[2,3,1,6,0];
console.log(`Sorted array is : ${arr1}`);
bubbleSort(arr1);
console.log(`Unsorted array is ${arr1}`);

console.log('........................stack..........................')
class stack{
    constructor(cap){
        this.cap=cap;
        this.arr=[];
        this.top=-1;
        this.count=0;
    }
    push(data){
        if(this.top==this.cap-1){
            console.log("Overflow");
        }
        this.top++;
        this.arr[this.top]=data;
        this.count++;
        console.log(this.count);
    }
    pop(){
        if(this.top==-1){
            console.log('Underflow');

        }
        let res=this.arr[this.top];
        this.top--;
        console.log(`popped : ${res}`);
    }
    peek(){
        if(this.top==-1){
            console.log("empty");
        }
        console.log(this.arr[this.top]);
    }

}

let s=new stack(2);

s.push(2)
s.push(0)
s.push(1)

s.pop()
s.peek()

console.log(`......................Queue............................`)

function queue(size){
    this.size=size;
    this.arr=[];
    this.front=0;
    this.rear=0;
}

queue.prototype.enqueue=function(data){
    if(this.rear==this.size){
        console.log(`Overload`);
    }
    this.arr[this.rear]=data;
    this.rear++;
}
queue.prototype.dequeue=function(){
    if(this.front==this.rear){
        console.log('Underflow');
    }
    let res=this.arr[this.front];
    this.front++;
    console.log(res);
}

let q=new queue(4);

q.enqueue(1)
q.enqueue(0)
q.enqueue(4)
q.enqueue(8)
q.enqueue(7)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()

console.log(q.arr)