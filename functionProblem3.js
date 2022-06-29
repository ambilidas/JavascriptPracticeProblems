var readlineSync = require('readline-sync');
var number=parseInt(readlineSync.question("Enter number"));
palindrome(number);
prime(number);
function prime(number)
{
    
    var test=0;
    for(let i=2;i<=number/2;i++)
    {
        if(number%i==0)
        {
            test=1;
            console.log("Not prime");
            break;
        }
        
    }
    if(test==0)
    {
        console.log("Prime number");
    }
}

function palindrome(number)
{
    
    var rem,temp,final=0;
    temp=number;
    while(number>0)
    {
        rem=number%10;
        number=parseInt(number/10);
        final=final*10+rem;
    }
    if(final==temp)
    {
        console.log("Number is palindrome");
    }
    else
    {
        console.log("Number is not palindrome");
    }
}
