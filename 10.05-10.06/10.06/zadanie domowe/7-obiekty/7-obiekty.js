class Ksiazka {
    constructor(tytul,autor,przeczytane){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytane = Boolean(przeczytane);
    }
    opiszKsiazke(){
        console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została ${this.przeczytane}przeczytane`)
    }
}
let ksiazka1 = new Ksiazka("Wiedźmin","Andrzej Sapkowski", 1);
let ksiazka2 = new Ksiazka("Polska. Góry i pogórza","Jan Kowalski", 0);
let ksiazka3 = new Ksiazka("1984", "George Orwell",1);
let lista = [ksiazka1,ksiazka2,ksiazka3];
const iloscPrzeczytanych =(lista)=>{
    for (let klucz in Ksiazka){
        if ( przeczytane = 1){
            i++;
        }console.log(klucz);
    } return i;
    
}

