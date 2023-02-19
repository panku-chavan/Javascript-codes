let stack=function(cap){
    this.cap=cap;
    this.top=-1;
    this.arr=[];
}

stack.prototype.push=function(item){
    if(this.top==this.cap-1){
        console.log('Overflow');
    }
    this.top++;
    this.arr[this.top]=item;
}
stack.prototype.pop=function(){
    if(this.top==-1){
        console.log('Underflow');
    }
    let res=this.arr[this.top];
    this.top--;
    console.log(res);
}

stack.prototype.peek=function(){
    if(this.top==-1){
        console.log("Underflow");
    }else{
        console.log(this.arr[this.top]);
    }

stack.prototype.isEmpty=function(){
    if(this.top==-1){
        console.log("Empty..!");
    }else{
        console.log("Not Empty..!");
    }
}

}

let s=new stack(3);

s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.pop()
s.peek()
s.isEmpty()