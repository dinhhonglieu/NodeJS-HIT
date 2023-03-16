let arrA = [1,7,4,3,1,2,2,9,3];
let arrB = [];
arrB = arrA.filter(function(x){
    return arrB.includes(x) ? '' : arrB.push(x) 
});
console.log(arrB)
let x = arrB.length;
for(let i =0; i< x -1; i++){
    for(let j = i+ 1; j< x; j++){
        if( arrB[i] > arrB[j ]){
            let tamp = arrB[i];
            arrB[i] = arrB[j];
            arrB[j] = tamp;
        }
    }
}

console.log(arrB);