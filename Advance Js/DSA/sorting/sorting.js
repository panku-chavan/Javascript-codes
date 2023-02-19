console.log('***************Bubble Sort****************')
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
let a=[0,2,3,0,4,5,6,9,7,0];
console.log("Unsorted elements :",...a);
bubbleSort(a);
console.log('Sorted elements are:',...a);
console.log('*************Selection Sort*************')

function selectionSort(arr){
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

let b=[0,9,8,7,6,5,4,3];
console.log('Unsorted elements are:',...b);
selectionSort(b);
console.log('Sorted elements are:',...b);

console.log('**************insertion sort************')
function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let index=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>index){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=index;
  }
}
let c=[4,3,56,7,23,6,8];
console.log('Unsorted elements are:',...c);
selectionSort(c);
console.log('Sorted elements are :',...c);
console.log('***************Merge Sort**************')
let mergeSort=function(arr,left,right){
    if(left==right){
        return;
    }
    let mid=Math.floor((left+right)/2);
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    merger(arr,left,right,mid);
}
function merger(arr,left,right,mid){
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
let copyArr=(arr,start,end)=>{
    let result=[];
    for(let i=start;i<=end;i++){
        result.push(arr[i]);
    }
    return result;
}


let d=[1,23,9,0,3,1,6,8];
console.log("Unsorted elements are:",...d);
mergeSort(d,0,d.length-1);
console.log("Sorted elements are:",...d);
console.log('**************Quick Sort**************')

function Quick(arr,low,high){
    if(low>=high){
        return;
    }
    let index=partition(arr,low,high);
    Quick(arr,low,index-1);
    Quick(arr,index+1,high);
}
function partition(arr,low,high){
    let i=low;
    let j=high;
    let pivot=arr[low];
    while(i<j){
        while(arr[i]<=pivot && i<high){
            i++;
        }
        while(arr[j]>pivot && j>low){
            j--;
        }
         if(i<j){
           swap(arr,i,j);
        }
   }
   swap(arr,low,j);
   return j;
}
function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
let res=[24,1,0,3,6,55,4,0,11,0];
console.log('unsorted elements are:',...res);
Quick(res,0,res.length-1)
console.log('Sorted elements are:',...res)