console.log('.....................Sorting.........................')
console.log('\n');
console.log('....................Bubble Sort.......................')
console.log('\n');

function bubbleSort(arr){
    let isSwap=false;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
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
let arr=[2,05,76,06,1,4,0];
console.log("Unsorted elements are : ",...arr);
bubbleSort(arr);
console.log(`Sorted elements are : ${arr}`)
console.log('...................Selection Sort......................')
console.log('\n');
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
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
let arr2=[0,7,3,1,0,2,8,0,1,3];
console.log(`Unsorted elements are : ${arr2}`)
selectionSort(arr2);
console.log(`Sorted elements are : ${arr2}`)
console.log('..................Insertion Sort.......................')
console.log('\n');
let insertionSort=(arr)=>{
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
let arr3=[7,5,6,4,20,0,1,3,5];
console.log(`Unsorted elements are : ${arr3}`);
insertionSort(arr3);
console.log(`Sorted elements are : ${arr3}`)

console.log('.....................MergeSort.........................')
function mergeSort(arr,left,right){
     if(left==right){
        return;
     }
     let mid=Math.floor((left+right)/2);
     mergeSort(arr,left,mid);
     mergeSort(arr,mid+1,right);
     merger(arr,left,right,mid);
}
let merger=(arr,left,right,mid)=>{
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
        second++
        index++;
    }

}
let copyArr=function(arr,start,end){
    let result=[];
    for(let i=start;i<=end;i++){
        result.push(arr[i]);
    }
    return result;
}
let arr4=[9,1,0,3,5,0,4,0,7,6];
console.log(`Unsorted elements are : ${arr4}`);
mergeSort(arr4,0,arr4.length-1);
console.log(`Sorted elements are : ${arr4}`);