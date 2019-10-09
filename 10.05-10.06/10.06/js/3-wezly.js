const div1 = document.getElementsByClassName('par-first')[0];
const rodzicDiva = div1.parentElement;
const potomkowieDiva = div1.children;
// nie zadziala for each petla
const pierwszyPotomekDiva = div1.firstElementChild;
const ostatniPotomekDiva = div1.lastElementChild;
const elementPrzedDivem = div1.previousElementSibling;
const elementZaDivem = div1.nextElementSibling;
console.log(elementZaDivem.nextElementSibling);

