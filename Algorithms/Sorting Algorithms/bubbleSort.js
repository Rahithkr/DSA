function bubblesort(arr){
    let swapped
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
        
    }while(swapped)
}

const arr=[0,1,6,-12,3]
bubblesort(arr)
console.log(arr)