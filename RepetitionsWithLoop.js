console.log("Repetition Problems with loops")

var range=prompt("Enter range to find power of two: ");
var sum=1
for (var i=1; i<=range; i++){
    sum=sum*2;
}

console.log("Power of 2 table upto the range is: ",sum);