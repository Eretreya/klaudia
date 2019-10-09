
const sorted = (str) => {
    let strArray = str.split("").sort().join('');
    
    console.log(strArray);

}
sorted("Akademia108");

const sortedFunction = (str2) =>{
    let splitString = str2.split("");
    let i= 0;
    let j = 1;
    while (i< str2.length){
        while (j < str2.length) {
            if (splitString[j] < splitString[i] ){
        let swapVar = splitString[j];
       splitString[j] = splitString[i];
        splitString[i] = swapVar;
        i++;
        j++;
    }};
    console.log(splitString); 
};
sortedFunction("Akademia108");