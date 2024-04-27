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
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left===null){
                root.left=newNode
            }
            else{
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
    search(root,value,id){
        if(!root){
            return false
        }
        else{
            if(root.id===id){
                return root.value
            }
            else{
                if(value < root.value){
                    return this.search(root.left,value,id)
                }
                else{
                    return this.search(root.right ,value,id)
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

    levelOrder(){
        const queue=[]
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
}


const bst = new binarySearchTree()

bst.insert("RAHITH",10)

bst.insert("ANFAS",20)
bst.insert("MIDHUN",50)
bst.insert("RAKESH",60)




console.log(bst.search(bst.root,"RAKESH",20))
bst.preOrder(bst.root)
// console.log(bst.search(bst.root,16))
// bst.levelOrder()