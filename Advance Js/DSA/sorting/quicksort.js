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
function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
let arr = [3,7,2,8,2,782,7,29,1,3,0,34];
quickSort(arr,0,arr.length-1);
console.log(arr)