let student1={
    rollno:1,
    name:'Pankaj',
    marks:[22,33,44],

    TotalMarks(){
      let sum=0;
      for(let i=0;i<this.marks.length;i++){
        sum+=this.marks[i];
      }
      return `sum is : ${sum}`;
    }
};
//console.log(student1.TotalMarks())
let student2={
    rollno:1,
    name:'Pankaj',
    marks:[25,33,44]
};

//console.log(student1.TotalMarks.apply(student2))
let x=student1.TotalMarks.bind(student2);

for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log("even:",student1.TotalMarks());
    }else{
        console.log("odd:",x());
    }
}


