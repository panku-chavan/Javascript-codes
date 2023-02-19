const Reebok_shoe={
    brand:'Reebok',
    type:'shoes',
    material:'leather',
    country:'India'
}

let Loafers=Object.create(Reebok_shoe);
Loafers.name="Loafers";
console.log("Loafers",Loafers);

let Sneakers=Object.create(Reebok_shoe);
Sneakers.name="Sneakers";
console.log("Sneakers",Sneakers);