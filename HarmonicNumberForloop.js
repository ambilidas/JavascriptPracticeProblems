console.log("Find the nth harmonic value");
var readlineSync = require('readline-sync');

let n =  parseInt(readlineSync.question("Enter the limit: "));
var sum = 0;
function Harmonic()
{
    
    for(var i=1; i <= n; i++)
    {
        sum = sum + 1/i;
    }
    console.log("sum of series up to " + n + " terms: " + sum);
}
Harmonic();