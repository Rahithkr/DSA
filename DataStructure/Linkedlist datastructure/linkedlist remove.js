class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
  isEmpty(){
    return this.size===0
  }
  getSize(){
    return this.size
  }
  insert(value,index){
  if(index <0 || index > this.size){
    return
  }
  else{
    const node=new Node(value)
    if(index===0){
        node.next=this.head
        this.head=node
        
      }
  
  else{
    let prev=this.head
    for(let i=0;i<index-1;i++){
        prev=prev.next

    }
    node.next=prev.next
    prev.next=node
  }
  this.size++
  
  }
  }
  remove(index){
    if(index < 0 || index >= this.size){
        return null
    }
    let removedNode
    if(index===0){
        removedNode=this.head
        this.head=this.head.next
    }
    else{
        let prev=this.head
        for(let i=0 ;i<index-1;i++){
            prev=prev.next
        }
        removedNode=prev.next
        prev.next=removedNode.next
    }
    this.size--
  }
  print(){
    let curr=this.head
    let listvalue=""
    while(curr){
        listvalue += `${curr.value}`
        curr=curr.next
    }
    console.log(listvalue)
  }
}

const list =new LinkedList()
list.insert(10,0)
list.insert(20,1)
list.insert(30,2)

list.print()
list.remove(1)
list.print()