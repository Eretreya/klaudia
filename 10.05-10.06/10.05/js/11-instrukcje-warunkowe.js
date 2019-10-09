const wiekKasi = 29;
const wiekDominiki = 28;
let miesiac = 10;

if(wiekKasi> wiekDominiki && miesiac == 9 ){
    document.body.style.backgroundColor = "red";

}else if (wiekKasi<wiekDominiki){
    document.body.style.backgroundColor = "blue";
}
 else {
    document.body.style.backgroundColor ="green";
}
switch(miesiac) {
    case 8 :
        document.body.textContent = "Sierpień";
        break;
    case 9 :
            document.body.textContent = "Wrzesień";
            break;
    case 10 :
        document.body.textContent = " Październik";
        break;
    default:
        document.body.textContent = "nie mam pojecia co za miesiac";
}