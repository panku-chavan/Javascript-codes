

let passexam= true;

let myPromise=new Promise(function(resolve,reject){

    if(passexam===true){
        resolve("hi...i'm passed the exam...!");
    }
    else{
        reject('failed...');
    }
})

console.log(myPromise)
myPromise.then(function(res){
    console.log("res :",res)
})

myPromise.catch(function(err){
    console.log("err",err)
})