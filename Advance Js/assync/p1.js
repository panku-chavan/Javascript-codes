let h2=document.getElementById('count');

function test(){
    let i=10;
    let x=setInterval(function(){
        i=i-1;
        console.log(`count interval : ${i}.`)
        h2.innerText=i;
        if(i==0){
        clearInterval(x);
     }

    },2000)


}

test();