
console.log('.................stack...............')

class stack{
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
        console.log(`Pushed ${this.count} item which is ${this.arr}.`)
    }
    pop(){
        if(this.top==-1){
            console.log(`Underload`);
        }
        let res= this.arr[this.top];
        this.top--;
        console.log(`Popped ${res}.`);
    }
    peek(){
        if(this.top==-1){
            console.log('Underload');
        }
        else{
            console.log(`Top of the stack is ${this.arr[this.top]}`)
        }
    }
}
let s=new stack(2);
s.push(2)
s.push(3)
s.push(0)
s.peek()
s.pop()
s.pop()
s.peek()

console.log('....................Queue......................')

let Queue=function(size){
    this.size=size;
    this.arr=[];
    this.front=0;
    this.rear=0
    this.count=0;
}

Queue.prototype.enqueue=function(data){
    if(this.rear==this.size){
        console.log('Overflow.');
    }
    this.arr[this.rear]=data;
    this.rear++;
    this.count++;
    console.log(`Added ${this.count} items which is ${this.arr}`);

}
Queue.prototype.dequeue=function(){
      if(this.front==this.rear){
        console.log('Underflow.');
      }
      let res= this.arr[this.front];
      this.front++;
      console.log(`Removed ${res}.`)

}

let q=new Queue(2);
q.enqueue(0)
q.enqueue(8)
q.enqueue(7)
q.dequeue()
q.dequeue()

console.log('....................merge sort..................')

function mergeSort(arr,l,r){
     if(l==r){
        return;
     }

let m=Math.floor((l+r)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,r,m);
}
function merge(arr,l,r,m){
   let a=copyArr(arr,l,m);
   let b=copyArr(arr,m+1,r);
   let i=l;
   let f=0;
   let s=0;

   while(f<a.length && s<b.length){
        if(a[f]<=b[s]){
            arr[i]=a[f];
            f++;
        }else{
            arr[i]=b[s];
            s++;
        }
        i++;
   }
   while(f<a.length){
    arr[i]=a[f];
    f++;
    i++;
   }
   while(s<b[s]){
    arr[i]=b[s];
    s++;
    i++;
   }
}
function copyArr(arr,l,r){
   let res=[];
   for(let i=l;i<=r;i++){
    res.push(arr[i]);
   }
   return res;
}

let arr=[2,4,1,0,9,3];
console.log('Unsorted elements are :',...arr);
mergeSort(arr,0,arr.length-1);
console.log(`Sorted elements are : ${arr}`)