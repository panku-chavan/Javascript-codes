console.log('....................Sorting....................')

console.log('...................Bubble Sort..................')

function Bubble(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}
let arr=[5,4,0,3,6,9,7,0,0];
console.log('Unsorted elements are :',...arr);
Bubble(arr);
console.log('Sorted elements are :',...arr)

console.log('...............Selection sort..................')

function Selection(arr){
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
let arr1=[5,6,1,4,2,0,1,3];
console.log('Unsorted elements are :',...arr1);
Selection(arr1)
console.log('Sorted Elements are :',...arr1)

console.log('.................Insertion Sort....................')

let Insertion=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let insert=arr[i];
        let j=i-1;
        while(arr[j]>=0 && arr[j]>insert){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=insert;
    }
}

let arr2=[4,56,7,1,2,3,6,9,0];
console.log('Unsorted elements are :',...arr2)
Insertion(arr2);
console.log('Sorted elements are :',...arr2)
console.log('..................Merge Sort......................')
function mergeSort(arr,l,r){
    if(l==r){
        return;
    }
    let mid=Math.floor((l+r)/2);
    mergeSort(arr,l,mid);
    mergeSort(arr,mid+1,r);
    merger(arr,l,r,mid);
}

function merger(arr,l,r,mid){
   let arr1=copy(arr,l,mid);
   let arr2=copy(arr,mid+1,r);
   let first=0;
   let second=0;
   let index=l;

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

let copy=(arr,s,e)=>{
    let result=[];
    for(let i=s;i<=e;i++){
        result.push(arr[i]);
    }
    return result;
}

let a=[5,7,8,9,6,0,1];
console.log('Unsorted elements are:',...a);
mergeSort(a,0,a.length-1);
console.log('Sorted elements are:',...a)
console.log('..................Quick Sort....................')
function quickSort(arr,left,right){
    if(left>=right){
        return;
    }
    let index=partition(arr,left,right);
    quickSort(arr,left,index-1);
    quickSort(arr,index+1,right);
    
}


function partition(arr,left,right){
    let i=left;
    let j=right;
    let pivot=left;
    while(i<j){
        while(arr[i]<=pivot && i<right){
            i++;
        }
        while(arr[j]>pivot && j>left){
            j--;
        }
        if(i<j){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            //swap(arr[i],arr[j]);
        }
    }
    //swap(pivot,j);
    let temp=pivot;
    pivot=j;
    j=temp;
      return j;
}
let swap=(a,b)=>{
    let temp=a;
    a=b;
    b=temp;
}


let b=[2,0,1,4,6,3,9,7,0,2,3,6,4];
console.log('Unsorted elements are:',...b);
quickSort(b,0,b.length-1);
console.log('Sorted elements are :',...b)