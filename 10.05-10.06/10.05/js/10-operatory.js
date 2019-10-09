let liczba1 = 15;
let liczba2 = 5;
let liczba3 = 2;

// operatory arytmetyczne 
const mnozenie = liczba1 * liczba2 ;
const dzielenie = liczba1 / liczba2 ;
const dodawanie = liczba1 + liczba3 ;
const odejmowanie = liczba2 - liczba3 ;
const modulo = liczba2 % liczba3 ; 

console.log(mnozenie,dzielenie,dodawanie, odejmowanie, modulo);

// preinkrementacja / postinkrementacja
/* ++liczba3;
liczba2++;
pre = liczba3;
post = liczba2;
console.log(pre,post);

console.log(post); */

/* console.log(liczba1,liczba1++);
console.log(liczba2,++liczba2);
console.log(liczba1); */

// operatory porównania

/* console.log(liczba1 == 15);
console.log(liczba1 > liczba2 && liczba2>liczba3);
console.log(liczba1 < liczba2 || liczba2 > liczba3);
 */

//  operator trojargumentowy
let wynik = (liczba2 == liczba3) ? "Tak" : "Nie";
console.log(wynik);

console.log(!true);

liczba3 += 15;
// liczba3 = liczba3 + 15
console.log(liczba3);