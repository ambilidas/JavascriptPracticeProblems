var readlineSync = require('readline-sync');
let day =  parseInt(readlineSync.question("Enter day"));
let month =  parseInt(readlineSync.question("Enter month"));
if(month == 4 || month == 5)
{
    console.log("True");
}
else if((month == 3 && day > 20) || (month == 6 && day < 20))
{
    console.log("True");
}
else
{
    console.log("False");
}