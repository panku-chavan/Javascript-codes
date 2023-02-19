

function bubble(arr){
    n=arr.length;
    let isSwap= false;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
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

let arr=[2,5,7,6,9,4];
console.log("original array",arr);

bubble(arr);

console.log(arr);