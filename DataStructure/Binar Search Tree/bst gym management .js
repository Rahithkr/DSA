class Node{
    constructor(value,id){
        this.value=value
        this.id=id
        this.left=null
        this.right=null
    }
}
class binarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value,id){
        const newNode=new Node(value,id)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,id){
        if(!root){
            return false
        }
        else{
            if(root.id===id){
                return root.value
            }else{
                if(id < root.id){
                    return this.search(root.left,id)
                }else{
                    return this.search(root.right,id)
                }
            }
        }
    }



    preOrder(root){
        if(root){

            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }


    // BFS



levelOrder(){
    let queue=[]
    queue.push(this.root)
    while(queue.length){
        let curr=queue.shift()
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }

}
min(root){
    if(!root.left){
        return root.value
    }
    else{
        return this.min(root.left)
    }
}

max(root){
    if(!root.right){
        return root.value
    }
    else{
        return this.max(root.right)
    }
}

}

const bst=new binarySearchTree()
bst.insert("AROMAL",42)
bst.insert("RAHUL",20)
bst.insert("RAHITH",15)
bst.insert("SABREEN",25)


console.log(bst.search(bst.root,15))
bst.preOrder(bst.root)
bst.levelOrder()
console.log(bst.max(bst.root))













