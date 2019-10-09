const samochody = ["Honda", "Fiat", "Citroen", "Mazda", "Audi"];

console.log(samochody, samochody.length);

// dodajemy do konca tablicy
samochody.push('BMW',"Porsche");

console.log(samochody, samochody.length);

// dodajemy na poczatku
samochody.unshift("Dacia","Skoda");

console.log(samochody, samochody.length);

// usuwamy z konca tablicy i zwracamy usuniety element do zmiennej

let usunietyElement = samochody.pop();

console.log(samochody, samochody.length);
console.log(`Usunięty element to: ${usunietyElement}`);

// usuwamy z konca 3 elementy

let usunietyZKonca3 = samochody.splice(samochody.length - 3);
console.log(samochody, samochody.length);

// usuwamy z poczatku tablicy i zwracamy usuniety elementy do zmiennej

let usunietyPoczat = samochody.shift();

console.log(samochody, samochody.length);

console.log(`Usunięty element to: ${usunietyPoczat}`);

// zamiana tablicy na string

let tablicaNaTekst = samochody.join("========");

console.log(tablicaNaTekst);

// tablice ze stringa

let stringNaTablice = tablicaNaTekst.split(" ------ ");
console.log(stringNaTablice);

// odwrocenie tablicy
let odwroconaTablica = samochody.reverse();
console.log(odwroconaTablica);

// posortowana tablica

let posortowana = samochody.sort();
console.log(posortowana);

let czyIstnieje = samochody.indexOf("Skoda");
console.log(czyIstnieje);
// jak czegoś nie ma w tablicy to wynik wyskoczy -1

// zwraca elemnt jako true lub false

let czyIstniejeBoolean = samochody.includes("Citroen");
console.log(czyIstniejeBoolean);

// sprawdz czy zmienna jest tablica
let czyTablica = Array.isArray(samochody);
console.log(czyTablica);

// metoda do przechodzenia po wszystkich elementach tablicy
samochody.forEach(function(elementTablicy, indexTablicy,tablica){
    console.log(`Wartość elementu: ${elementTablicy} | index elementu: ${indexTablicy}`);
});