var readlineSync = require('readline-sync');

function conversion()
{
    let choice=  parseInt(readlineSync.question("Enter your choice\n 1:C to F conversion\n 2:F to C conversion"));
    switch(choice)
    {
        case 1:
            let C=parseInt(readlineSync.question("Enter temperature in degreeC"));
            if(C>=0 && C<=100)
            {
                let F=(C*9/5)+32;
                console.log("Temperature in degreeF: "+F);
            }
            else
            {
                console.log("Invalid entry");
            }
            break;
        case 2:
            let F=parseInt(readlineSync.question("Enter temperature in degreeF"));
            if(F>=32 && F<=212)
            {
                let C=(F-32)*5/9;
                console.log("Temperature in degreeC: "+C);
            }
            else
            {
                console.log("Invalid entry");
            }
            break;
        default:
            console.log("Entered option is invalid"); 
            break;     
    }
}
conversion();