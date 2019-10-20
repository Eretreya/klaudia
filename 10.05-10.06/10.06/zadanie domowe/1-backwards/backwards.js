const backwards = (str) =>{
  
  console.log(str.split("").reverse().join(""));
}
backwards("Akademia108");

const arrayReverse = (str) => {
    while (i< 11){
        let arrayToReverse = Array.from(str);
        let i1 = 0;
        let i2 = 1;
        let arr = str[i1];
        str[i1] = str[str.length- i2];
        i += 1;
        i1 += 1;
        i2 += 1;
    }
    console.log(word);
}
arrayReverse("Akademia108");



function revString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
revString('Akademia108');

