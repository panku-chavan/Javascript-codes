// using class method


class Stack{
    constructor(n){
        this.top=-1;
        this.arr=[];
        this.cap=n;
    }
push(item){
    if(this.top==this.cap-1){
        return "Sorry......Stack is full, it may be overflow...!";
        
    }
    this.top++;
    this.arr[this.top]=item;
}

pop(){
    if(this.top==-1){
        return "Sorry.. Stack is empty right now, you need to add some element first."
    }
    let result=this.arr[this.top];
    this.top--;
    return result;
}

peek(){
    if(this.top==-1){
        return "Sorry.. Stack is empty right now, you need to add some element first."
    }
    
    return this.arr[this.top];
}
size(){
    return this.top+1;
}
isEmpty(){
    if(this.top==-1){
        return "Stack is empty";
    }else{
        return `Stack is not empty,stack has ${this.top+1} element.`
    }
}

}

let stack=new Stack(5);
stack.push(1);
stack.push(2);
stack.push(5);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
stack.push(2)
console.log(stack.size());
console.log(stack.isEmpty())
console.log(stack.arr)