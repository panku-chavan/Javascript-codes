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
kitchen.cooc_food.call(living_room,'anda bhurji');
