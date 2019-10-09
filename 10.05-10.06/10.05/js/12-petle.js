const imiona = [
    "Maciek",
    "Zosia",
    "Pawel",
    "Jola"
];
for(let i=0; i <= imiona.lenght-1; i++) {
    console.log(imiona[i]);
    /* if (i%2 == 0){
        continue; pozwala kontynuować petle
        break;
    } */
}
// for in - petla do iteracji w obiektach
const obj = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wiek: 36

}
for(let i in obj){
    // jezeli chcemy zeby petla dzialala tylko w konkretnych zakresie to dodaj warunek
    console.log(`Właściwość: ${i} ::::::: Wartość właściwości: ${obj[i]}`);
}

// petla while

let number = 10;
let iter = 0;
let wynik = [];

while(iter <= number){
    wynik.push(`iteracja nr ${iter + 1}`);
    iter++;
}
do{
    wynik.push(`iteracja nr ${iter + 1}`);
    iter++;
} while(iter <= number);

console.log(wynik.join(`\n`));

