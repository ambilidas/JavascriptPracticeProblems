console.log("Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...");
var readlineSync = require('readline-sync');
let number =  parseInt(readlineSync.question("Enter a number(1/10/100/1000)"));
   
    switch(number)
    {
        
        case 1:
            console.log("UNIT");
            break;
        case 10:
            console.log("TEN");
            break;
        case 100:
            console.log("HUNDRED");
            break;
        case 1000:
            console.log("THOUSAND");
            break;
        case 10000:
            console.log("TEN THOUSAND");
            break;
        case 100000:
            console.log("ONE LAKH");
             break; 
                  
        default:
            console.log("Invalid entry");
            break;    
    }

