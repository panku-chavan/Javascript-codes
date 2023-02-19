console.log("this is stack and queue implementation");
//stack

class Stack{
    constructor(cap){
        this.cap=cap;
        this.arr=[];
        this.top=-1;
        this.count=0;
    }
push(item){
    
    if(this.top==this.cap-1){
        console.log("Stack Overflow");
    }
    this.top++;
    this.arr[this.top]=item;
    this.count++;
    console.log(this.count);
}

pop(){
    if(this.top==-1){
        console.log("Underflow");

    }
    let res=this.arr[this.top];
    this.top--;
    console.log(res);
}

peek(){
    if(this.top==-1){
        console.log("Underflow");
    }
    console.log(this.arr[this.top]);
}
isEmpty(){
    if(this.top==-1){
        console.log("Stack is empty now...");
    }else{
        console.log(`Stack has ${this.top+1} elements.`);
    }
}
}

let s= new Stack(3);

s.push(7)
s.push(0)
s.push(4)
s.isEmpty()

s.pop()
s.pop()
s.pop()
s.peek()
