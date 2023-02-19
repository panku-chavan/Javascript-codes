function bubble(arr){
    let isSwap=false;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]<arr[j+1]){
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
const arr = [3, 9, 8, 10, 7, 1];
bubble(arr);
console.log(arr)