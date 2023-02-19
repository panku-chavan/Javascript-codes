
function fact(n){
    let prod=1;
    for(let i=n;i>=1;i--){
        prod=prod*i;
    }
    return prod;
}

let n=4;

console.log(`Factorial of${n} is :${fact(n)}.`)