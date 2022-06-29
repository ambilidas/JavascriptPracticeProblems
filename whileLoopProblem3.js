

var headCount=0;
var tailCount=0;
while(headCount<11 || tailCount<11)
{
    var num = Math.floor(Math.random()*10);
    if(num == 0)
    {
        console.log("HEAD");
        headCount++;
    }
    else
    {
        console.log("TAIL");
        tailCount++;
    }
}
