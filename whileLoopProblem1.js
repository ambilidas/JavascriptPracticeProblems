var readlineSync = require('readline-sync');
let n=  parseInt(readlineSync.question("Enter number"));
var sum=1;
var count =0;
while(count<n && sum<256)
{
    
        sum=sum*2;
        console.log(sum);
        count++;
    
    
}