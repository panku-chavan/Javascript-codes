console.log('................Merge sort....................')

function mergeSort(arr,left,right){
    if(left==right){
        return;
    }
let mid = Math.floor((left+right)/2);
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    merge(arr,left,right,mid);
}

let merge=(arr,left,right,mid)=>{
   let arr1=copyArr(arr,left,mid);
   let arr2=copyArr(arr,mid+1,right);
   let first=0;
   let second=0;
   let index=left;

   while(first<arr1.length && second<arr2.length){
    if(arr1[first]<=arr2[second]){
        arr[index]=arr1[first];
        first++;
    }else{
        arr[index]=arr2[second];
        second++;
    }
    index++;
   }
   while(first<arr1.length){
    arr[index]=arr1[first];
    first++;
    index++;
   }
   while(second<arr2.length){
    arr[index]=arr2[second];
    second++;
    index++;
   }
}

let copyArr=(arr,a,b)=>{
   let arr1=[];
   for(let i=a;i<=b;i++){
     arr1.push(arr[i]);
   }
   return arr1;
}

let arr=[2,1,5,0,7];
let left=0;
let right=arr.length-1;
console.log('Unsorted array is :',arr)
mergeSort(arr,left,right);
console.log('Sorted array is :',arr);