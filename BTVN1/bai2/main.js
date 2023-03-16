let arrA = [1,7,4,2,3];
let arrB = [5,2,6,3,1];
let arrC = arrA.concat(arrB);

// console.log(arrC);
let arrD =[];
function myFunc(x, y){
    for( let i =0; i< (arrA.length )  ; i++)
{
    for( let j = 0; j< arrB.length; j++)
    {
        if( arrA[i] === arrB[j])
            arrD.push(arrA[i]);
    }
}
}
myFunc(arrA,arrB);
console.log(arrD);

