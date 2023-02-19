const cat={
    legs:4,
    tail:true,
    claus:'sharp',
    nails:true,
    type:"khatarnak"
}
console.log(cat)
let Tiger= Object.create(cat);
Tiger.speed='60mph'
console.log('Legs are:',Tiger.legs)
console.log(Tiger)