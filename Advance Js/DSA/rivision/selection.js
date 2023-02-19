console.log('*********Selection Sort************')
function Selection(arr){
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
let arr1=[4,5,1,3,0];
console.log('Unsorted array is :',...arr1);
Selection(arr1);
console.log('Sorted array is :',...arr1)