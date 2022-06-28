console.log("Program for Power of two");
var readlineSync = require('readline-sync');

let n =  parseInt(readlineSync.question("Enter the limit: "));
function main()
{
    let p = 1;
    for(var i=0; i <= n; i++)
    {
        if(i == 0)
        {
            p = 1;
        }
        else
        {
            p = p*2;
        }
        console.log("2^" + i + "=" + p);
    }
}
main();