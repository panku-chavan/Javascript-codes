console.log("Hi there.... i am from setInterval()");

let h2=document.getElementById('count');

let test=()=>{
    let i=1000;
    let x=setInterval(function(){
        i=i-1;
        console.log(`i:${i} : ${i+1} : ${i+2} : ${i} : ${i+1} : ${i+2} : ${i}`)
        h2.innerText=i;
        if(i==0){
            clearInterval(x)
        }
    },100);
    
}

test()

