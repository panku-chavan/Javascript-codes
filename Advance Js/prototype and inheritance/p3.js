const fish={
    name:'nemo',
    talk:true
}

let monkey=Object.create(fish);
monkey.name='bandr';
let human=Object.create(monkey);
human.name='pankaj';
console.log(human);

console.log(human.hasOwnProperty('talk'))
console.log(monkey.hasOwnProperty('name'));