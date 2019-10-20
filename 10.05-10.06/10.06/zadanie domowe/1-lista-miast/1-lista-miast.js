let lista = document.createElement("ol");
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

for (i=0;i<cities.length;i++){
    let elementListy = document.createElement("li");
    document.lista.appendChild(elementListy);
    elementListy.setAttribute("class","cities");
}