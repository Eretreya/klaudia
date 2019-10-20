let currentArray = [0,1,2,3,4,5];
const functionPower =(i)=> {
    emptyArray = [];
    let a2 = Math.pow(i,2);
    nested = emptyArray.push(a2);
    console.log(nested);
}
functionPower([0,1,2,3,4,5])

function kwadrat(Arr){
    let arr2 = [];
for (i=0 ; i < Arr.length; i++){
    // arr2 += Math.pow(Arr[i],2);
    // add2 += arr2[i];
    arr2 = Arr.push(Math.pow(Arr[i],2));
}
console.log(arr2);
};
kwadrat([0,1,2,3,4,5]);
