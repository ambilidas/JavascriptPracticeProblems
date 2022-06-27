console.log("Unit conversion");
var readlineSync = require('readline-sync');
let choice =  parseInt(readlineSync.question("Enter your choice \n 1.Feet to inch \n 2.Feet to meter \n 3.Inch to Feet \n 4.Meter to Feet "));
let number = parseInt(readlineSync.question("Enter number to convert "));
switch(choice)
{
    case 1:
        var result = 12*number;
        console.log(result +" Inches");
        break;
    case 2:
        var result = 0.3048*number;
        console.log(result +" Meter");
        break;
    case 3:
        var result = number/12;
        console.log(result +" Feet");
        break;
    case 4:
        var result = number*3.281;
        console.log(result +" Feet");
        break;
    default:
            console.log("Invalid entry");
            break;
}
   