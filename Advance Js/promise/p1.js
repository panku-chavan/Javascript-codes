
let pas=true;

function test(){
    let myPromise =new Promise(function(resolve,reject){

        if(pas===true){

            resolve("COngradulations....You are passed the exam.");

        }
        else{
        reject("pal...tu falied v  gaya..");
        }
    })

    myPromise.then(function(res){
        console.log("res:",res);
    })
    myPromise.catch(function(err){
        console.log("err:",err)
    })
}

test()


