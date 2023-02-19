console.log('*****************Quick Sort*************')
function quickSort(arr,low,high){
    if(low>=high){
        return;
    }
    let index=partition(arr,low,high);
    quickSort(arr,low,index-1);
    quickSort(arr,index+1,high);
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
let swap=(arr,a,b)=>{
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

let arr4=[5,6,2,1,7,8,9,0];
console.log('Unsorted elements are:',...arr4);
quickSort(arr4,0,arr4.length-1);
console.log('Sorted elements are :',...arr4);