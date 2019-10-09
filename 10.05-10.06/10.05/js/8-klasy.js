let kolekcjaAut = [];
class samochod {
    constructor(marka, model, przebieg, silnik, rok, kolor){
        this.marka = marka;
        this.model = model;
        this.przebieg = przebieg;
        this.silnik = silnik;
        this.rok = rok;
        this.kolor = kolor;
    } 
    
    wyswietlInfo(){
        document.body.insertAdjacentHTML('beforeend',`
            samochod\n
            marka: ${this.marka}\n
            model: ${this.model}\n
            przebieg: ${this.przebieg}\n
            silnik:${this.silnik}\n
            rok: ${this.rok}\n
            kolor: ${this.kolor}\n
            <br>
          `);
        }
 zapiszDoBazy(){
     kolekcjaAut.push(this);
 
}
}
 let auto1 = new samochod(
     "BMW",
     "X6",
     5000,
     "diesel",
     2013,
     'czarny'
 );

 auto1 = new samochod(
     "Audi",
     "A6",
     4000,
     "diesel",
     2018,
     "czerwony",
 )
 auto1.wyswietlInfo();
 auto1.zapiszDoBazy();
 console.log(kolekcjaAut);
 kolekcjaAut.forEach(function(elementTablicy,indexTablicy){
     console.log(elementTablicy.marka, elementTablicy.model, elementTablicy.kolor);
 })