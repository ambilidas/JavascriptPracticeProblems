var readlineSync = require('readline-sync');
var num = parseInt(readlineSync.question("Enter the number"));
function prime()
{
    let test = 0;
    for(var i=2; i <= num/2 ; i++)
    {
        if(num%i == 0)
        {
            test = 1;
            break;
        }
    }
    if(test == 0)
    {
        console.log("Prime Number");
    }
    else
    {
        console.log("Not Prime number");
    }
}
prime();