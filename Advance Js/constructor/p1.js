// function Nike(){
//     let obj={};
//     obj['name']='nike shoe';
//     obj['price']=2100;
//     obj['type']='shoe';
//     return obj;
// }
// console.log(Nike());

// function Nike(){
//     this.name='shoe';
//     this.price=2100;
// }
// let p1= new Nike();
// console.log(p1);


let student= function(n,a){
      this.name=n;
      this.age=a;
}
let p1=new student('pankaj',21);
console.log(p1);
let p2=new student("rohit",22);
console.log(p2);