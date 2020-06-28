var num = prompt("Enter Number : ");
num = parseFloat(num);
document.write('Number : ' + num + "<br>") ;
document.write('Round Off Value : ' +Math.round(num)+ "<br>");
document.write('Ceil Value : ' +Math.ceil(num)+ "<br>");
document.write('Floor Value : ' +Math.floor(num));


var num = prompt("Enter Number : ");
num = parseFloat(num);
document.write('Number : ' + num + "<br>") ;
document.write('Round Off Value : ' +Math.round(num)+ "<br>");
document.write('Ceil Value : ' +Math.ceil(num)+ "<br>");
document.write('Floor Value : ' +Math.floor(num));

var num = prompt("Enter Number : ");
num = parseInt(num);
document.write('Number : ' + num + "<br>") ;
document.write('Absolute Value : ' +Math.abs(num));

var dice = Math.floor( Math.random() * 6 ) +1;
document.write('Random Dice Value is  ' + dice);

if( Math.floor(Math.random() * 2) === 0){
   document.write('Random coin value : HEAD');
 }else{
   document.write('Random coin value : TAILS');
 }

document.write('Random number between 1 and 100 : ' + Math.floor(Math.random() * 100));


var weight = prompt("Enter your weight in Kilogram : " );
document.write('The weight of the user is '+ weight + ' Kilogram')

var guess =  prompt("Enter a number between 1 to 10 : ");
var num = (Math.floor(Math.random() * 10)+ 1); 
if(guess == num) 
{     
   alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT . THE NUMBER WAS "
           + num ); 
} 
else if(guess > num) 
{    
   alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
} 
else
{ 
   alert("OOPS SORRY!! TRY A GREATER NUMBER") 
} 
