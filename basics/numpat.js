let n = 10;
for (let i = 1; i <= n; i++) {
    let bag = '';
    for (let j = 1; j <= i; j++) {
        bag = bag + j;
    }
    console.log(bag);
}
for (let i = n; i >= 1; i--) {
    let bag1 = '';
    for (let j = 1; j <= i; j++) {
        bag1 = bag1 + j;
    }
    console.log(bag1);
}