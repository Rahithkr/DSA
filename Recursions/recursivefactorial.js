function factorail(n){
    if(n===0){
        return 1
    }
    return  n * factorail(n-1)

}

console.log(factorail(0))

console.log(factorail(4))

console.log(factorail(6))