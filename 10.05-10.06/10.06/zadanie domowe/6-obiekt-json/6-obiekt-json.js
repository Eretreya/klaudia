    let jsonPracownicy = {
        "pracownicy":[
            {"firstName": "Krystian", "lastName": "Dziopa"}, 
            {"firstName": "Anna", "lastName": "Szapiel"},
            {"firstName": "Piotr", "lastName": "Żmuda"}
        ]
    }
    console.log(jsonPracownicy);
    jsonPracownicy.forEach(iteracje);
    const iteracje = (value, index) => {
        value += jsonPracownicy.firstName[index];
        console.log(value);
        console.log(index);
        
          
          
    };
}
