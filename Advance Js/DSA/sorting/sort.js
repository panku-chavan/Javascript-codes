console.log("...............Sorting Technique..............")
console.log(' ');
console.log(' ');
console.log('...............Bubble Sort....................')

function Bubble(arr){
    
   
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
            }
        }
   }
}

let arr=[5,2,4,7,3,0,1,6,0];
console.log("Unsorted array is :",...arr)
Bubble(arr)
console.log('Sorted Array is :',...arr)
console.log('...............Selection Sort....................')

let select=(arr)=>{
for(let i=0;i<arr.length;i++){
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

let arr1=[0,9,8,5,4,2,1];
console.log('Unsorted array is :',...arr1);
select(arr1);
console.log("Sorted Array is :",...arr1)

console.log('...............Insertion Sort....................')

let insert=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let x=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>x){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=x;
    }
}

let arr2=[6,5,3,3,2,1,0];
console.log('Unsorted array is :',...arr2)
insert(arr2);
console.log('Sorted array is :',...arr2)

console.log('..................Merge Sort......................')

function mergeSort(arr,l,r){
    if(l==r){
        return;
    }
let m=Math.floor((l+r)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,r,m);
}
let merge=(arr,l,r,m)=>{
    let a=copy(arr,l,m);
    let b=copy(arr,m+1,r);
    let f=0;
    let s=0;
    let i=l;

    while(f<a.length && s<b.length){
        if(a[f]<=b[s]){
            arr[i]=a[f];
            f++;
        }else{
            arr[i]=b[s];
            s++;
        }
        i++;
    }
    while(f<a.length){
        arr[i]=a[f];
        f++;
        i++;
    }
    while(s<b.length){
        arr[i]=b[s];
        s++;
        i++;
    }
}
let copy=(arr,s,e)=>{
    let res=[];
      for(let i=s;i<=e;i++){
        res.push(arr[i]);
      }
    return res;
}
let res=[2,1,9,7,5,3,0];
console.log("Unsorted array is :",...res);
mergeSort(res,0,res.length-1);
console.log("Sorted array is :",...res)
