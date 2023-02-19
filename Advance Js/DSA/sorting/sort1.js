console.log('.....................Sorting Technique.................')
console.log("\n")
console.log('......................Bubble Sort.......................')

function Bubble(arr){
   let isSwap=false;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
               isSwap=true;
            }
        }
        if(!isSwap){
            break;
        }        
    }
}
let arr=[0,1,3,6,7,0,1,5,0,3];
console.log('\n');
console.log('Unsorted elements are :',...arr);
Bubble(arr);
console.log('Sorted elements are :',...arr);
console.log('\n');


console.log('......................Selection Sort...................')

let Selection=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
}
let arr1=[0,2,5,1,0,3,9];
console.log("\n")
console.log('Unsorted elements are :',...arr1);
Selection(arr1);
console.log('Sorted elements are :',...arr1);

console.log('.....................Insertion Sort....................')
console.log('\n')

let Insertion=function(arr){
   for(let i=1;i<arr.length;i++){
    let insert=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>insert){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=insert;
   }
}

let arr3=[7,8,9,4,5,69,0];
console.log('Unsorted elements are :',...arr3)
Insertion(arr3)
console.log('Sorted elements are :',...arr3)

console.log('\n')
console.log('.......................Merge Sort......................')
console.log('\n')

let mergeSort=(arr,left,right)=>{
    if(left==right){
        return;
    }
    let mid=Math.floor((left+right)/2);
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    merge(arr,left,right,mid);
}
let merge=(arr,left,right,mid)=>{
    let arr1=copy(arr,left,mid);
    let arr2=copy(arr,mid+1,right);
    let first=0;
    let second=0;
    let index=left;

    while(first<arr1,length && second<arr2.length){
        if(arr1[first]<=arr2[second]){
            arr[index]=arr1[first];
            first++;
        }
        else{
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

let copy=(arr,left,right)=>{
    let res=[];
    for(let i=left;i<=right;i++){
        res.push(arr[i]);
    }
    return res;
}

let arr4=[5,1,4,6,3,1,7,0];
console.log('Unsorted elements are :',...arr4);
mergeSort(arr4,0,arr4.length-1);
console.log('Sorted elements are :',...arr4)