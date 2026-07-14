function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let arrLength = arr.length
    let middle = Math.floor(arrLength/2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)


    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr, rightArr) {
    let mergedArr = []
    let leftArrInd = 0
    let rightArrInd = 0

    while(leftArrInd < leftArr.length && rightArrInd < rightArr.length){
        if(leftArr[leftArrInd]<rightArr[rightArrInd]){
            mergedArr.push(leftArr[leftArrInd])
            leftArrInd++
        }else{
            mergedArr.push(rightArr[rightArrInd])
            rightArrInd++
        }
    }
    return mergedArr.concat(leftArr[leftArrInd]).concat(rightArr[rightArrInd])

}