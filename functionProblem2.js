var readlineSync = require('readline-sync');

function palindrome()
{
    var number=parseInt(readlineSync.question("Enter number"));
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
palindrome();