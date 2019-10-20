function sortBubble (number){
    for (i=0; i<number.length; i++){
        for(j=0; j<number.length; i++){
            if (number[j]<number[j+1]){
                let container = number[j];
                number[j] = number[j+1];
                number[j+1] = container;
            };
        };
    };
    console.log(number);
};
sortBubble([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]);
