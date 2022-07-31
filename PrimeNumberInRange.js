var frange =prompt("Please enter first extremity");
var lrange=prompt("Please enter last another extrimity")

console.log("All prime number with in that range are:");
for (i=frange;i<=lrange;i++){
    var count=0;
    for (var j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(i);
    }
}