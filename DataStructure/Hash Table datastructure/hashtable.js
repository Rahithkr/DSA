


class Hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        const index=this.hash(key)
        return this.table[index]
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }
}


const table=new Hashtable(20)
table.set('name','john')
table.set('age',20)
table.display()