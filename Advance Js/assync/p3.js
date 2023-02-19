// function test(t,n){
//     this.name=t;
//     this.no=n;
// }


// let t1=new test('pankja',2);
// console.log(t1)

// let student={
//     name:'pankaj',
//     marks:[2,3,4],
//     totalMark(){
//             let sum=0;
//             for(let i=0;i<=this.marks.length-1;i++){
//                 sum+=this.marks[i];
//             }
//             return sum;
//     }
// }
// let student1={
//     name:'pankaj',
//     marks:[1,3,4]
// }

// console.log(student.totalMark);
// console.log(student.totalMark.call(student1))

let student={
    name:'pankaj',
    marks:[2,3,4],
    totalMark(){
            let sum=0;
            for(let i=0;i<=this.marks.length-1;i++){
                sum+=this.marks[i];
            }
            return sum;
    }
}

let s1=Object.create(student);
let s2=Object.create(s1);
let s3=Object.create(s2);
let s4=Object.create(s3);

console.log(s4)