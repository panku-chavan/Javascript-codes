//call,apply,bind

// let obj={
//     name:'pankaj',
//     age:21,
//     marks:[21,22,33],
//    TotalMarks(){
//            let sum=0;
//            for(let i=0;i<this.marks.length;i++){
//             sum+=sum+this.marks[i];
//            }
//            return sum;
//    }
// }

// let obj1={
//     name:'pankaj',
//     age:21,
//     marks:[21,22,34]
   
// }

// console.log(obj.TotalMarks.call(obj1))
// let x=obj.TotalMarks.bind(obj1);
// console.log(x())


//prototype


// let obj1={
//     name:'pankaj',
//     age:21,
//     marks:[21,22,34]
   
// }

// let obj=Object.create(obj1);

// 
//

// //prototype chaining
// let obj1={
//     name:'pankaj',
//     age:21,
//     marks:[21,22,34]
   
// }

// let obj=Object.create(obj1);
// let obj3=Object.create(obj);
// let obj4=Object.create(obj3);
// let obj5=Object.create(obj4);

// obj5.name='chavan'
// console.log(obj5)



//prototype chaining
//use hasownproperty

// let obj1={
//     name:'pankaj',
//     age:21,
//     marks:[21,22,34]
   
// }

// let obj=Object.create(obj1);
// let obj3=Object.create(obj);
// let obj4=Object.create(obj3);
// let obj5=Object.create(obj4);

// obj5.name='chavan'
// console.log(obj5)
// console.log(obj5.hasOwnProperty('name'))
// console.log(obj5.hasOwnProperty('age'))


//use of prototype

function greet(){
    this.name="hello";
    this.greet='good morning';
}


greet.prototype.add=function(){
    console.log("Hi....there")
}

let a=new greet();

a.add()

console.log(a)