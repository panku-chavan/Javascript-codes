function info(name,age,status){
    this.name=name;
    this.age=age;
    this.status=status;
}
let p1= new info('pankja',21,'single');
console.log(p1);

for(let i=0;i<10;i++){
    p2= new info('Tony Stark',52,'Married');
    console.log(p2);
}

