function Newspaper(p){
    this.Date=new Date();
    this.randome_id=Math.round(Math.random()*10);
    this.name='Marvel'
    this.publisher='Pankaj Chavan';
    this.heading=p;
}
let arr=[];
for(let i=0;i<6;i++){

    let p1=new Newspaper('this is heading');
    arr.push(p1);
    //console.log(p1);
}
console.log(arr);