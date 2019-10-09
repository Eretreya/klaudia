function mnozenie(liczba1, liczba2, liczba3){
    // przypisuje do zmiennej "wynik" wynik mnożenia trzech parametrow
    let wynik = liczba1*liczba2*liczba3 ;

    // Tworzy tekst z wynikiem - 2 sposoby ES5 i ES6
 let rezultatDzialaniaFunkcji = "Twój wynik to: " + wynik ;
 let rezultatDzialaniaFunkcji2 = `Twój wynik to: ${wynik}`;

//  zwraca z fukncji rezultat jej dzialania, wszystko ponizej return juz sie nie wykona
return rezultatDzialaniaFunkcji2;

 console.log(rezultatDzialaniaFunkcji,rezultatDzialaniaFunkcji2);
}
let wynikDzialaniaFunkcji = mnozenie(2,4,6);
console.log(wynikDzialaniaFunkcji);

/* Uzycie struktury strzalkowej */

const mnozenieFatArrow = (par1,par2,par3) => {
    let wynik2 = par1* par2 * par3 ;
    let rezultatFatArrow = `Szanowny userze, Twój wynik to: ${wynik2}, xoxo`
    return rezultatFatArrow;
} 
let wynikMnozenieFatArrow = mnozenieFatArrow(3,3,1);
console.log(wynikMnozenieFatArrow);

/* Skrótowy zapis strzalkowy */

const mnozenieSkrotowo = (p1,p2,p3) => `Twój wynik to ${p1*p2*p3}`;
let wynikSkrotowo = mnozenieSkrotowo(2,4,6);
console.log(wynikSkrotowo);