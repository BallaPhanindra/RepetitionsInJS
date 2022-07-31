console.log("Welcome to Sequence Problems")

let singleDigitRandomNumber = Math.floor(Math.random() * 10);  
console.log("Random single digit : "+singleDigitRandomNumber);

let RandomNumber = Math.floor(Math.random() * 6)+1;  
console.log("Random Dice Number : "+RandomNumber);

let RandomNumber1 = Math.floor(Math.random() * 6)+1;  
let RandomNumber2 = Math.floor(Math.random() * 6)+1;  
console.log("Addition of 2 random dice numbers : "+(RandomNumber1+RandomNumber2));

let num = 0;
let sum = 0;
let countOfRandommNumbers = 5;

for(let i = 0; i < countOfRandommNumbers; i++){
    num = Math.floor(Math.random()*100);
    sum = sum + num;
}
let average = sum / countOfRandommNumbers;
console.log("Sum : " +sum +", Average : "+average);

//Unit Conversion
let inputInches=42;
let inchToFeet=inputInches/12;
console.log("42 in = "+inchToFeet+" ft");

//Area
let AreaInFeet=30*20; 
let AreaInMeter=AreaInFeet/0.092;//1 sq ft=0.092 mtrsquare
console.log("Plot area in meter : "+AreaInMeter);

//25*Area
let AreaInAcre=AreaInFeet* 25 * 0.0;
console.log("25 plots area in meter : "+AreaInAcre);