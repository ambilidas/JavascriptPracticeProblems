var readlineSync = require('readline-sync');
console.log("Enter 3 numbers");
let a =  parseInt(readlineSync.question("Enter first number"));
let b =  parseInt(readlineSync.question("Enter second number"));
let c =  parseInt(readlineSync.question("Enter third number"));
var result1 = a + b * c;
console.log(result1);
var result2 = a % b + c;
console.log(result2);
var result3 = c + a / b;
console.log(result3);
var result4 = a * b + c;
console.log(result4);
function maximum()
{
    if(a > b && a > c)
    {
        console.log("Maximum number is: " + a);
    }
    if(b > a && b > c)
    {
        console.log("Maximum number is: " + b);
    }
    else
    {
        console.log("Maximum number is: " + c);
    }

}
function minimum()
{
    if(a < b && a < c)
    {
        console.log("Minimum number is: " + a);
    }
    if(b < a && b < c)
    {
        console.log("Minimum number is: " + b);
    }
    else if(c < a && c < b)
    {
        console.log("Minimum number is: " + c);
    }
}
maximum();
minimum();
