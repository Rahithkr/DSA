

class Node{
  constructor(value){
    this.value= value
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
  append(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
    }
    else{
      let prev=this.head
      while(prev.next){
        prev=prev.next
      }
      prev.next=node
    }
    this.size++
  }

  print(){
    if(this.isEmpty()){
      console.log("list is empty")
    }
    else{
      let curr=this.head
     let  listValue=""
      while(curr){
        listValue +=`${curr.value}`
        curr=curr.next
      }
      console.log(listValue)
    }
  }
}


const list= new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.print()