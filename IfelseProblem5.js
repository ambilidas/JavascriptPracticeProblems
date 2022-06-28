//var readlineSync = require('readline-sync');
var num1 = Math.floor(Math.random()*999)+100;
var num2 = Math.floor(Math.random()*999)+100;
var num3 = Math.floor(Math.random()*999)+100;
var num4 = Math.floor(Math.random()*999)+100;
var num5 = Math.floor(Math.random()*999)+100;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
//getting max number
if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5)
{
    console.log("Maximum number: "+num1);
}
else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5)
{
    console.log("Maximum number: "+num2);
}
else if(num3 > num2 && num3 > num1 && num3 > num4 && num3 > num5)
{
    console.log("Maximum number: "+num3);
}
else if(num4 > num2 && num4 > num3 && num4 > num1 && num4 > num5)
{
    console.log("Maximum number: "+num4);
}
else
{
    console.log("Maximum number: "+num5);
}
//getting min number
if(num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5)
{
    console.log("Minimum number: "+num1);
}
else if(num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5)
{
    console.log("Minimum number: "+num2);
}
else if(num3 < num2 && num3 < num1 && num3 < num4 && num3 < num5)
{
    console.log("Minimum number: "+num3);
}
else if(num4 < num2 && num4 < num3 && num4 < num1 && num4 < num5)
{
    console.log("Minimum number: "+num4);
}
else
{
    console.log("Minimum number: "+num5);
}