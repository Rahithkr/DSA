class TrieNode{
    constructor(){
        this.children=new Map()
        this.isEndWord=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children.has(char)){
                node.children.set(char,new TrieNode())
            }
            node=node.children.get(char)
        }
        node.isEndWord=true
    }

    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children.has(char)){
                return false
            }
            node=node.children.get(char)

            }
            return node.isEndWord
        }

        searchPrefix(prefix){
            let node=this.root
            for(let char of prefix){
                if(!node.children.has(char)){
                    return false
                }
                node=node.children.get(char)
            }
            return true
        }
    }



const trie= new Trie()

trie.insert("APPLE")
console.log(trie.searchPrefix("PPLE"))
