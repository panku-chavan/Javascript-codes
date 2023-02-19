console.log("hello from setTimeout()");

function test(){
    setTimeout(function(){
        for(let i=0;i<5;i++){
           // console.log(`Hello :${i}`)
        }
    },3000)
}
test();


//console.log("hi i am at third position actually...!");