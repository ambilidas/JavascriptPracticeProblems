console.log("Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...");
var readlineSync = require('readline-sync');
let number =  parseInt(readlineSync.question("Enter a number(1/10/100/1000)"));
if(number==1)
{
    console.log("UNIT");
}
else if(number==10)
{
    console.log("TEN");
}
else if(number==100)
{
    console.log("HUNDRED");
}
else if(number==1000)
{
    console.log("THOUSAND");
}
else if(number==10000)
{
    console.log("TEN THOUSAND");
}
else if(number==100000)
{
    console.log("ONE LAKH");
}
else 
{
    console.log("INVALID ENTRY");
}