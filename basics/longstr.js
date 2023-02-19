function palindrom(s){
    let str='';
    for(let i=s.length-1;i>=0;i--){
        str+=s[i];
    }
    //console.log(str);
    if(s==str){
        return true;
    }else{
        return false;
    }
}
//palindrom('pankaj');
//console.log(palindrom('nayan'));
let str='ababababab';
let max=0;
long='';
for(let i=0;i<=str.length-1;i++){
    let bag='';
    for(let j=i;j<=str.length-1;j++){
        bag=bag+str[j];
        if(palindrom(bag)){
            //console.log(bag);
            max=Math.max(max,bag.length)
            if(bag.length==max){
               long=bag;
            }
        }
        //console.log(bag);
    }
}
console.log('Longest Palindromic Substring is :', long);
