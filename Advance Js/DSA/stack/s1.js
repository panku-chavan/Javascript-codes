let n=5;
let arr=[];
let top=-1;

 push(data){
     if(top==n-1){
        return "stak is full...";
     }
     top++;
     arr[top]=data;
}

function pop(){
    if(top==-1){
        return "Stack is empty, you need push some element.";
    }
    let res= arr[top];
    top--;
    return res;
}

function peek(){
    if(top==-1){
        return "Stack is empty, you need push some element.";
    }
    
    return arr[top];
}

console.log(arr.push(12));
console.log(arr.push(11));
console.log(arr);


console.log(peek());