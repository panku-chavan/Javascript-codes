class stack {
    constructor(cap){
        this.top=-1;
        this.arr=[];
        this.cap=cap;
    }

push(item){
    if(this.top==this.cap-1){
        console.log("stack overflow");
    }
    this.top++;
    this.arr[this.top]=item;
}    

pop(){
    if(this.top==-1){
        console.log("Stack is empty");
        return;
    }else{
        this.top--;
        console.log(this.arr[this.top]);
    }
    
}

peek(){
    if(this.top===-1){
        console.log("There is no element to display. ");
        return;
    }else{
        console.log(this.arr[this.top]);
    }
    
}

size(){
    console.log(this.top+1);
}

isEmpty(){
    if(this.top==-1){
        console.log('stack is empty');
    }else{
        console.log(`stack is not empty, there are ${this.top+1} element in stack.`);
    }
}

}


let s=new stack(2);

s.push(2);
s.push(3);
s.push(12);
s.pop();
s.pop()
s.pop();
s.pop()
s.peek()





console.log(s);
