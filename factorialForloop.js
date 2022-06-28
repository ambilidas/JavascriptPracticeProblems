var readlineSync = require('readline-sync');
var num = parseInt(readlineSync.question("Enter the number"));
function factorial()
{
    var sum=1;
    for(var i=1; i <= num; i++)
    {
        sum = sum * i;
    }
    console.log(sum);
}
factorial();