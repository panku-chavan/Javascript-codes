console.log("************Merge Sort************")

function mergSort(arr,low,high){
    if(low==high){
        return;
    }
    let mid = Math.floor((low + high)/2);
    mergSort(arr,low,mid);
    mergSort(arr,mid+1,high);
    merger(arr,low,high,mid);
}
let merger=(arr,low,high,mid)=>{
    let arr1=copyArr(arr,low,mid);
    let arr2=copyArr(arr,mid+1,high);
    let first=0;
    let second=0;
    let index=low;
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
    let res=[];
    for(let i=start;i<=end;i++){
        res.push(arr[i]);
    }
    return res;
}


let arr3=[8,4,6,1,0,3,7,4,14];
console.log('Unsorted elements are:',...arr3);
mergSort(arr3,0,arr3.length-1)
console.log('sorted elements are:',...arr3);