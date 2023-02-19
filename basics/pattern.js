function pattern(n) {
    let x = Math.floor(n / 2);
    for (let i = 0; i <= n; i++) {
        let bag = '';
        for (let j = 0; j <= n; j++) {
            if (i == 0 || i == n || j == 0 || j == n || i == x || j == x) {
                bag = bag + "* ";
            } else {
                bag = bag + '  ';
            }
        }
        //return bag;
        console.log(bag);
    }
}
pattern(10);
//console.log(pattern(10));