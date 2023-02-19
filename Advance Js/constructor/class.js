class student{
     constructor(name,age){
        this.name=name;
        this.age=age;
     };
  call(){
    console.log(`My name is ${this.name}and i am ${this.age}`);
  };
}

let x=new student('Pankaj',21);
x.call();