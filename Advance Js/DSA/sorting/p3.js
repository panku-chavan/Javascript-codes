console.log('................Selection Sort...........')

let selectSort=(arr)=>{
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
let arr=[9,0,4,7,1,6];
console.log('Unsorted array is  :', ...arr);
selectSort(arr);
console.log('Sorted array is :',...arr);

console.log('.................Bubble Sort..............')

function bubbleSort(arr){
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
let arr1=[0,9,8,7,6,5,4,3,2,1];
console.log('Unsorted array is :',...arr1);
bubbleSort(arr1);
console.log('Sorted array is :',...arr1)

console.log('.....................Stack....................')

class Stack{
    constructor(size){
        this.size=size;
        this.arr=[];
        this.top=-1;
        this.count=0;
    }
    push(data){
        if(this.top==this.size-1){
            console.log('Overflow');
        }
        this.top++;
        this.arr[this.top]=data;
        this.count++;
        console.log(`Pushed ${this.count} element is stack, which is ${this.arr}.`);
    }
    pop(){
        if(this.top==-1){
            console.log(`Stack Underflow.`);
        }
        let res=this.arr[this.top];
        this.top--;
        console.log(`Popped ${res}`);
    }
    peek(){
        if(this.top==-1){
            console.log(`Stack is empty now.`);
        }
        console.log(`Top of stack is : ${this.arr[this.top]}`);
    }
    isEmpty(){
        if(this.top==-1){
            console.log("Stack is empty now...!");
        }else{
            console.log(`Stack is not empty, there is ${this.top+1} elements in stack.`)
        }
    }
}

let s= new Stack(3);
s.push(2)
s.push(0)
s.push(1)
s.push(8)
s.peek()
s.pop()
s.isEmpty()

console.log('...................Queue.................')

let queue=function(size){
    this.size=size;
    this.front=0;
    this.rear=0;
    this.arr=[];
}

queue.prototype.enq=function(data){
    if(this.rear==this.size){
        console.log('Overload..!');
    }
    this.arr[this.rear]=data;
    this.rear++;
    console.log(`Added ${data} in Queue. Queue = ${this.arr}`);
}
queue.prototype.deq=function(){
    if(this.front==this.rear){
        console.log('Underflow.....!');
    }
    let res=this.arr[this.front];
    this.front++;
    console.log(`Removed ${res} in Queue.`);
}


let q= new queue(3);

q.enq(0)
q.enq(9)
q.enq(8)
q.enq(7)
q.deq()
q.enq(1)