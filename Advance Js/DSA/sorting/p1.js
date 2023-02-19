function bubble(arr){
    let isSwap=false;
    for(i=0;i<arr.length;i++){
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

console.log(`.............Bubble Sorting.................`)
let arr=[9,8,0,2,5,7,8,4,3];
console.log(`Unsorted array is : ${arr}.`);
bubble(arr);
console.log(`Sorted array is : ${arr}.`);

console.log(".............Selection sorting.............");


function selectSort(arr){
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

let arr1=[9,8,0,2,5,7,8,4,3];
console.log(`Unsorted array is : ${arr1}.`);
selectSort(arr1);
console.log(`Sorted array is : ${arr1}.`);
