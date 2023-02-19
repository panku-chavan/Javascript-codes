function selectSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        swap(arr,min,i);
    }
}
function swap(arr,a,b){
    let temp=arr[b];
      arr[b]=arr[a];
      arr[a]=temp;
}

let arr=[2,6,1,8,0,7];
selectSort(arr);
console.log(...arr);