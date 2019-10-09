const iloczynFunkcja = (x,y,z) => {
    let iloczyn = x*y*z;
    return iloczyn;
}
let globalnyIloczyn = iloczynFunkcja(3,5,6);
console.log(globalnyIloczyn);

/* Alternatywne rozwiazanie
const mnozenie = (a,b,c) => a*b*c;
const wynik = mnozenie(2,3,4);
console.log(wynik);
*/