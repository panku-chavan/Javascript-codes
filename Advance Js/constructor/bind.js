let kitchen={
    name:'Kitchen',
    purpose:'cook',
    order:'thali',

    cooc_food(x){
           console.log(`Serving ${this.order} and ${x}`);
    }

}

let living_room={
    name:'Living room',
    purpose: 'chill',
    order:'maggie'
}
let x=
kitchen.cooc_food.apply(living_room,'anda bhurji');
x();