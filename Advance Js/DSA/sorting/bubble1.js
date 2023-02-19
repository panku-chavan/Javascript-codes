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
        
    }
}


let arr=[17,3,6,9,1,4,0];
console.log(`Unsorted array is : ${arr}.`);
bubbleSort(arr);
console.log(`Sorted array : ${arr}.`);