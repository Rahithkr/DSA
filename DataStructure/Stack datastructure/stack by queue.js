var myStack=function(){
    this.queue1=[]
    this.queue2=[]
}
myStack.prototype.push=function(x){
    while(this.queue1.length!==0){
        this.queue2.push(this.queue1.shift())
    }
    this.queue1.push(x)
    while(this.queue2.length!==0){
        this.queue1.push(this.queue2.shift())
    }
}
myStack.prototype.pop=function(){
    return this.queue1.shift()
}
myStack.prototype.top=function(){
return this.queue1[0]
}
myStack.prototype.empty=function(){
    return this.queue1.length===0
}
myStack.prototype.print=function(){
    for(let i=0;i<this.queue1.length;i++){
        console.log(this.queue1[i])
    }
}
var stack= new myStack()




stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
stack.print()




