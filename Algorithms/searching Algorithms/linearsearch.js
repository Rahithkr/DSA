function linearsearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
        
    }
    return -1
}

console.log(linearsearch([-5,2,4,6,10],6))