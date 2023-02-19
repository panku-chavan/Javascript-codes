console.log('***********Bubble Sort************')

function Bubble(arr){
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
let arr=[5,2,1,3,4];
console.log('Unsorted elements are:',...arr)
Bubble(arr);
console.log('Sorted elements are:',...arr)