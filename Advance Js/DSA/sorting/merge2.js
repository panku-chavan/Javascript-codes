console.log('...........merge sort...............')

function mergeSort(arr,l,r){
     if(l==r){
        return;
     }

let m=Math.floor((l+r)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,r,m);
}
function merge(arr,l,r,m){
   let a=copyArr(arr,l,m);
   let b=copyArr(arr,m+1,r);
   let i=l;
   let f=0;
   let s=0;

   while(f<a.length && s<b.length){
        if(a[f]<=b[s]){
            arr[i]=a[f];
            f++;
        }else{
            arr[i]=b[s];
            s++;
        }
        i++;
   }
   while(f<a.length){
    arr[i]=a[f];
    f++;
    i++;
   }
   while(s<b[s]){
    arr[i]=b[s];
    s++;
    i++;
   }
}
function copyArr(arr,l,r){
   let res=[];
   for(let i=l;i<=r;i++){
    res.push(arr[i]);
   }
   return res;
}

let arr=[2,4,1,0,9,3];
console.log('Unsorted elements are :',...arr);
mergeSort(arr,0,arr.length-1);
console.log(`Sorted elements are : ${arr}`)