const ustawTlo = () =>{
    document.getElementById('red').style.backgroundColor = "red";
    document.getElementById('yellow').style.backgroundColor = "yellow";
}


const kolorki = document.querySelector(".btn");
kolorki.addEventListener("click", ustawTlo);

const formularz = document.querySelector("#formularz");
    formularz.addEventListener('submit', (callback) =>{
        callback.preventDefault();
        console.log(document.querySelector('[name="fname"]').value);
        console.log(document.querySelector('[name="lname"]').value);

    });

