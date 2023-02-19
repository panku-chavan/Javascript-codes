console .log('......insertion sort.......')

function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let insert=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>insert){
           arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=insert;
    }
}

let arr=[8,4,2,7,3,0];
console.log('Unsortef array is :',arr);
insertion(arr);
console.log('Sorted array is :',arr)