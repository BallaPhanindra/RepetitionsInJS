var num =prompt("Please enter number to check if prime number: ");

var count=0;
for (var i=1;i<=num;i++){
    if (num%i==0){
        count=count+1;
    }
}

if (count==2){
    console.log("The number is Prime Number");
}
else{
    console.log("The number is not a prime number")
}