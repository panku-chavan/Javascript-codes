// function scope(){
//     console.log(this);
// }
// scope();

//console.log(this)

let greet={
    name:'pankaj',
    age:21,
    test:function(){
        console.log(this)
    }

}
greet.test();

let greet1={
    name:'pankaj',
    age:21,
    test:function(){
        console.log(this)
    }

}
greet1.test();