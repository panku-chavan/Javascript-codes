function prime(n){
var count=0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==2){
    console.log(n,"is Prime number.");
}else{
    console.log(n,"is not prime number");
}
}

for(let i=1;i<=50;i++){
    prime(i);
}