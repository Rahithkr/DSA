

class Graph{
    constructor(){
        this.adjcentList={}
    }
    advertex(vertex){
        if(!this.adjcentList[vertex]){
            this.adjcentList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjcentList[vertex1]){
            this.advertex(vertex1)
        }
        if(!this.adjcentList[vertex2]){
            this.advertex(vertex2)
        }

        this.adjcentList[vertex1].add(vertex2)
        this.adjcentList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjcentList){
            console.log(vertex +"=>"+ [...this.adjcentList[vertex]])
        }
    }
}


const graph= new Graph()
graph.advertex("A")
graph.advertex("B")
graph.advertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()


