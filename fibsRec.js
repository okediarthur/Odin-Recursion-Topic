function fibsRec(n, fibArray = [0, 1]){
    if(n < 2){
        return fibArray.slice(0, n + 1);
    } else if (fibArray.length > n){
        return fibArray;
    }
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fibsRec(n, fibArray);
}

console.log(fibsRec(8));