function fibb(num){
    let result
    //base case
    if(num ==0 || num ==1){
        return num
    }else {
        return fibb(num-1)+fibb(num-2)
    }
}


function displayFibSeq(n){
    let arr=[]
    
    for(let i=0; i<n; i++){
        arr.push(fibb(i))
    }
    console.log(arr)
}

displayFibSeq(10)