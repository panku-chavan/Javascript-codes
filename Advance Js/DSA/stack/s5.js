


class Stack{
     constructor(cap){
        this.top=-1;
        this.arr=[];
        this.cap=cap;
     }

push(item){
    if(this.top==this.cap-1){
        console.log(`Stack overflow`);
    }
    this.top++;
    this.arr[this.top]=item;
}   

pop(){
    if(this.top==-1){
        return `Stack is empty`;
    }
    let res=this.arr[this.top];
    this.top--;
    return res;
}

peek(){
    if(this.top==-1){
        return ` stack is empty.`;
    }
    return this.arr[this.top];
}

size(){
    return this.top+1;
}

isEmpty(){
    if(this.top==-1){
        return `stack is empty`;
    }else{
        return `stack is not empty`;
    }
}
}


let stack= new Stack(4);

stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());