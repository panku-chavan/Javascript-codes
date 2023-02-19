class Stack{
    constructor(cap){
        this.top=-1;
        this.arr=[];
        this.cap=cap;
    }
    push(item){
        if(this.top==this.cap-1){
           console.log('Overflow')
        }
        this.top++;
        this.arr[this.top]=item;
        console.log('Pushed',item,'stack is :',...this.arr);
    }
    pop(){
        if(this.top==-1){
            console.log('Underflow');
        }
        let res = this.arr[this.top];
        this.top--;
        console.log('popped :', res);
    }
    peek(){
        if(this.top==-1){
            console.log('Underflow');

        }
        console.log('Top of the stack is :',this.arr[this.top]);

    }
    isEmpty(){
        if(this.top==-1){
            console.log('stack is empty');
        }else{
            console.log('stack is not empty, it has ',...this.arr,'elements.')
        }
    }
    Size(){
        console.log(this.top+1);
    }
}

let s= new Stack(3);
s.push(2)
s.push(8)
s.push(7)
s.push(4)
s.pop()
s.peek()
s.Size()
s.isEmpty()