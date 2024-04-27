class Heap{
   

    sort(arr){
        const n=arr.length

        for(let i=Math.floor((n-1)/2);i>=0;i--){
            this.heapify(arr,n,i)
        }

        for(let i=n-1;i>0;i--){
            const temp=arr[0]
            arr[0]=arr[i]
            arr[i]=temp

            this.heapify(arr,i,0)

        }
        return arr
    }
    heapify(arr,n,i){
        let largest=i
        let left=2*i+1
        let right=2*i+2

        if(left < n && arr[left] > arr[largest]){
            largest=left
        }
        if(right < n && arr[right] > arr[largest]){
            largest=right
        }
        if(largest !== i){
            const temp=arr[i]
            arr[i]=arr[largest]
            arr[largest]=temp

            this.heapify(arr,n,largest)
        }
    }
}

const heap= new Heap()

const unsortedArray=[12,15,2,3,9,40]

console.log(heap.sort(unsortedArray))

