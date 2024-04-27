

class Heap{
    constructor(){
        this.data=[]
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftIndex(i){
        return 2*i+1
    }
    getRightindex(i){
        return 2*i+2
    }
    swap(i1,i2){
        const temp=this.data[i1]
        this.data[i1]=this.data[i2]
        this.data[i2]=temp
    }

    push(key){
        this.data[this.data.length] =key
        this.heapifyUp()
    }
    heapifyUp(){
        let currentIndex=this.data.length-1
        while(this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex))

            currentIndex=this.getParentIndex(currentIndex)
        }
    }
    poll(){
        let maxValue=this.data[0]
          this.data[0]=this.data[this.data.length-1]
          this.data.length--
          this.heapifyDown()
    }

    heapifyDown(){
        let currentIndex=0
        while(this.data[this.getLeftIndex(currentIndex)] !== undefined){
            let bigchildindex=this.getLeftIndex(currentIndex)
            if(this.data[this.getRightindex(currentIndex)] !==undefined  &&
             this.data[this.getRightindex(currentIndex)] > this.data[this.getLeftIndex(currentIndex)]){
                bigchildindex= this.getRightindex(currentIndex)

            }
            if(this.data[currentIndex] < this.data[bigchildindex]){
                this.swap(currentIndex,bigchildindex)

                currentIndex=bigchildindex
            }

        }
    }
}

const heap=new Heap()
 
heap.push(25)
heap.push(20)
heap.push(30)
heap.push(35)
console.log(heap.data)
heap.poll()
console.log(heap.data)