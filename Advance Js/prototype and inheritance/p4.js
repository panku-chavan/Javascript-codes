function Newspaper(p){
    this.Date=new Date();
    this.randome_id=Math.round(Math.random()*10);
    this.name='Marvel'
    this.publisher='Pankaj Chavan';
    this.heading=p;
}


Newspaper.prototype.add=()=>{
    console.log("hi...there");
}

Newspaper.prototype.greet=function(){
    console.log("Good evening")
}
let n1= new Newspaper('pankaj chavan');

console.log(n1)
n1.add()
n1.greet()

