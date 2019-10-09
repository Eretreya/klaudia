// po id
const section = document.getElementById('section-first');
console.dir(section);

// po klasie
const links = document.getElementsByClassName("link");
console.dir('links');

for(let i=0; i< links.length; i++){
    console.dir(links[i]);
}
// spread operator
[...links].forEach((element, index) => {
    console.log(element);
});

// po tagach html

const p = document.getElementsByTagName('p');
console.log(p);

// po dowolnym selektorze
const divs = document.querySelectorAll('div');
console.log(divs);
 

