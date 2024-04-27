class Queue{

    constructor(){
        this.queue =[]
    }

      enQueue(element){
        this.queue.push(element)
      }

      deQueue(){
        if(this.isEmpty()){
            return "underflow"
        }else{
         return this.queue.shift()
        }
      }
      isEmpty(){
        return this.queue.length===0
      }

      front(){
        if(this.isEmpty()){
            return "underflow"
        }else{

           return  this.queue[0]
        }
      }
      print(){
        if(this.isEmpty()){
            return "underflow"
        }
        else{
            for(let i=0;i<this.queue.length;i++){
                console.log(this.queue[i])
            }
        }
      }
}


const queue=new Queue()


queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.print()
console.log(queue.deQueue())
// console.log(queue.front())

