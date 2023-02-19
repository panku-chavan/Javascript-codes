console.log('************Insertion Sort************')
function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let indert=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>indert){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=indert;
    }
}

let arr2=[9,2,4,6,3,0,1];
console.log('Unsorted elements are :',...arr2);
insertion(arr2);
console.log('Sorted elements are :',...arr2)