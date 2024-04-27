class Stack{
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
    }

    isEmpty(){
        return this.stack.length===0
   
    }
    getSize(){
        return this.stack.length
    }
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty")
        }
        else{
            return this.stack.pop()
        }
    }
    peek(){
        if(this.isEmpty()){
            console.log("stack is emptyyy")
        }
        else{
            return this.stack[this.getSize()-1]
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("stack i semptyyh")
        }
        else
        {
            for(let i=0;i<this.getSize();i++){
                console.log(this.stack[i])
            }
        }
    }
}


const stack=new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
console.log(stack.isEmpty())

console.log(stack.pop())
console.log(stack.peek())
console.log(stack.getSize())