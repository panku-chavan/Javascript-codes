//you are given an sorted array of number, you have to find two unique element such that there sum is K;

let arr=[2,3,7,11];
let k=10;

// let i= 0 ;
// let j=arr.length-1;

// while(i<j){
// let sum= arr[i]+arr[j];
//   if(sum==k){
//       console.log('true');
//       console.log(`${arr[i]} + ${arr[j]} = ${k}`);
//       break;
//   }else if(sum>k){
//      j--;
//   }else if(sum<k){
//      i++;
//   }
// }

let twoptr=(arr,k)=>{
    
let i= 0 ;
let j=arr.length-1;

while(i<j){
let sum= arr[i]+arr[j];
  if(sum==k){
      console.log('true');
      console.log(`${arr[i]} + ${arr[j]} = ${k}`);
      break;
  }else if(sum>k){
     j--;
  }else if(sum<k){
     i++;
  }
}
}

twoptr(arr,k);
