//-=-----1---funtion constructor

// function studentData(n,a,m){
//     this.name=n;
//     this.age=a;
//     this.marks=m;
// }


// let s1= new studentData('pankaj',21,65);
// console.log(s1)

//call apply bind

// let student={
//    name:'Pankaj',
//    age:25,
//    marks:[45,45,45],
   
//    addTotal(){
//     let sum=0;
//        for(let i=0;i<this.marks.length;i++){
//         sum+=this.marks[i];
//        }
//        return sum;
//    }
// }



// let student1={
//     name:'Pankaj',
//     age:25,
//     marks:[45,45,46],
// } 
// console.log(student.addTotal())
// let x=student.addTotal.bind(student1);

// console.log(x())

//prototype and inheritance


// let student1={
//     name:'Pankaj',
//     age:25,
//     marks:[45,45,46],
// }

// //prototype chain
// let s1= Object.create(student1);
// let s2=Object.create(s1);
// let s3=Object.create(s2);
// let s4=Object.create(s3);

// console.log(s4)

//has own property


// let student1={
//     name:'Pankaj',
//     age:25,
//     marks:[45,45,46],
// }

// //prototype chain
// let s1= Object.create(student1);
// let s2=Object.create(s1);
// let s3=Object.create(s2);
// let s4=Object.create(s3);

// console.log(s4.hasOwnProperty('name'));
// console.log(student1.hasOwnProperty('name'))



// let student1=function(){
//     this.name='Pankaj';
//     this.age=25;
//     this.marks=[45,45,46];
// }

// student1.prototype.add=function(){
//     console.log("I am added")
    
// }

// let s2=new student1();
// console.log(s2)
// s2.add()

// student1.prototype.greet=()=>{
//     console.log("Hi... ia am greeting you")
// }

// s2.greet()
class student {
    constructor (name, number){
      this.name=name;
      this.number=number;
  
      
    }
  }
  
  student.prototype.add=function(){
    console.log('hi.....there im a prototype');
  }
  //student.add()
  
   let s1= new student('pankaj',99999999);
  s1.add()
   console.log(s1)