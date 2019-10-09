// zmienna globalna - deklarowana poza jakiekolwiek blokiem kodu

let number = 101;




/* const addNumber = () => {
    let number = 5;
    let newNumber = 14;
} 
addNumber(); */

if(true == true) {
    let number = 5;
    let newNumber = 14;
    var zmiennaVar = 120;
    console.log(`Zmiennne lokalne w bloku kodu: ${number} i ${newNumber} i ${zmiennaVar} `);
}
const zasiegZmiennejVar = () => {
    var liczba = 100;
    return liczba ;
}

// zwrocenie zmiennej lokalnej do przestrzenii globalnej - sposob 2 - niezalecany
const wynikDzialaniaFunkcji = zasiegZmiennejVar();
console.log(wynikDzialaniaFunkcji);
/* console.log(number);
console.log(newNumber);
console.log(zmiennaVar);
console.log(liczba); */

var liczba2 ; 
const zasiegZmiennejVar2 = () => {
    liczba2 = 100;
}
zasiegZmiennejVar2();
console.log(liczba2);