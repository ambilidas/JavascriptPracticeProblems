console.log("Read a number and display week");
var readlineSync = require('readline-sync');
let number =  parseInt(readlineSync.question("Enter a number(0-6)"));
   
    switch(number)
    {
        case 0:
            console.log("SUNDAY");
            break;
        case 1:
            console.log("MONDAY");
            break;
        case 2:
            console.log("TUESDAY");
            break;
        case 3:
            console.log("WEDNESDAY");
            break;
        case 4:
            console.log("THURSDAY");
            break;
        case 5:
            console.log("FRIDAY");
            break;
        case 6:
            console.log("SATURDAY");
             break; 
                  
        default:
            console.log("Invalid entry");
            break;    
    }

