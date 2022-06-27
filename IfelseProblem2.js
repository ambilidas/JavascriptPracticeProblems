console.log("Read a number and display week");
var readlineSync = require('readline-sync');
let number =  parseInt(readlineSync.question("Enter a number(0-6)"));
if(number==0)
{
    console.log("SUNDAY");
}
else if(number==1)
{
    console.log("MONDAY");
}
else if(number==2)
{
    console.log("TUESDAY");
}
else if(number==3)
{
    console.log("WEDNESDAY");
}
else if(number==4)
{
    console.log("THURSDAY");
}
else if(number==5)
{
    console.log("FRIDAY");
}
else if(number==6)
{
    console.log("SATURDAY");
}
else 
{
    console.log("INVALID ENTRY");
}