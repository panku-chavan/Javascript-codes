//using prototype method

function Stack(n){
    this.top=-1;
    this.arr=[];
    this.cap=n;
}


//push
Stack.prototype.push=function(item){
    if(this.top==this.cap-1){
        return "Stack overflow";
    }
    this.top++;
    this.arr[this.top]=item;
}

//pop
Stack.prototype.pop=function(){
    if(this.top==-1){
        return "Sorry...stack is empty...you need to add some element.";
    }
    let res= this.arr[this.top];
    this.top--;
    return res;
}

//peek
Stack.prototype.peek= function(){
    if(this.top==-1){
        return "Sorry Pankaj....stack is empty...No items to display.";
    }
    return `Top element of stack is: ${this.arr[this.top]}`;
}

//size
 Stack.prototype.size=function(){
    return `Current Stack size is :${this.top+1} elements.`;
 }

 //

 Stack.prototype.isEmpty=function(){
    if(this.top==-1){
        return `Stack is empty, there is no elements in stack.`;
    }else{
        return `Stack is not empty, there are ${this.top+1} elements in stack.`;
    
    }
 }


let stack=new  Stack(5);
stack.push(5)
stack.push(2);
console.log(stack.pop());
stack.push(3);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack);