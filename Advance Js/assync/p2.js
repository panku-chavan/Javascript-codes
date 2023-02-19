let h2=document.getElementById('count');

function test(){
    let i=50;
    let x= setInterval(function(){
        i=i-1
       console.log(`hi...there this is interval ${i}`);
       h2.innerText=i;
       if(i==0){
          clearInterval(x);
       }
    },200);
    
}
test()