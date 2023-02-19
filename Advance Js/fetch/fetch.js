let url= "https://fakestoreapi.com/products/1";

let myReq= fetch(url);

//console.log("x:",x);

myReq.then(function(re){
    //console.log(re);
    return re.json();
})
.then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log(err);
})