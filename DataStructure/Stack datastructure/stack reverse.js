
const reverseStack=function(s){
    const splitStack=s.split(" ")
    const stack=[]
  
  for(let i of splitStack){
    stack.push(i)
  }
  let finals=""
  while(stack.length){
    const curr =stack.pop()
    if(curr){
      finals +=" " +curr
    }
  }
  return finals.trim()
  }
  
  console.log(reverseStack("this is that"))