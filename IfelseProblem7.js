var readlineSync = require('readline-sync');
let year =  parseInt(readlineSync.question("Enter an year"));
if(year>999 && year<10000)
{
    if(((year%4 == 0) && (year%100 != 0)) || (year%400 == 0))
    {
        console.log("Leap Year");
    }
    else
    {
        console.log("Not Leap Year");
    }
}
else
{
    console.log("Not Leap Year");
}
