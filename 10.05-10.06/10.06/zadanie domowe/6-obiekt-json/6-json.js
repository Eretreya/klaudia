let pracownicyJSON = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

pracownicyJSON.pracownicy.forEach(function(element, index) {
    console.log(`Element z indexem: ${index} imię i nazwisko : ${element.firstName} ${element.lastName}`);
    
});