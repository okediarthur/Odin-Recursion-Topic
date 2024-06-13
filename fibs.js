function fibonnaciArray(n){
    let fibArray = [];

    for(let i = 0; i <= n; i++){
        if(i < 2){
            fibArray.push(i);
        } else{
            fibArray.push(fibArray[i - 1] + fibArray[i -2]);
        }
    }
    return fibArray;
}

console.log(fibonnaciArray(8))