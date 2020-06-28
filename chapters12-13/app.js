var character  = window.prompt("Enter any character : ")

if(character >= 'a' && character <= 'z') 
{
    document.write(character + " is lower case alphabet.");
}
else if (character >= 'A' && character <= 'Z') {
    document.write (character + " is Upper case alphabet.");
}
else if(character >= '0' && character <= '9')
{
    document.write(character + " is digit.");
}
else 
{
    document.write(character + " is special character.");
}


var number1 =  window.prompt("Enter any first Number : ");
var number2 =  window.prompt("Enter any Second Number : ");

if (number1 > number2) {
    document.write (number1 +" is greater and "+ number2 +" is smaller.")
}
else if (number1 < number2) {
    document.write(number1 +" is smaller and "+ number2 +" is greater." )    
} else {
    document.write(number1 +" is equal "+ number2 + ".")    
}


var number =  window.prompt("Enter any Number : ");

if (number > 0 ) {
    document.write (number +" is greater then 0" )
}
else if (number < 0) {
    document.write(number +" is less than 0" )    
} else {
    document.write(number +" is equal to 0")    
}

var string =  window.prompt("Enter any alphabet : ");

if ((string == 'a' || string == 'e' || string == 'i' || string == 'o' ||string == 'u')||
(string == 'A' || string == 'E' || string == 'I' || string == 'O' ||string == 'U'))
  {
    document.write (string + " alphabet is vowel" )
}
 else {
    document.write(string +" it is not vowel ")    
}

var password = window.prompt("Enter password : ");
if (password === 'Huz3f@t!n') {
    document.write (" Correct! The password you entered matches the original password" )
}
else if (password === ''){
    document.write(" Please enter your password ")  
}
 else {
    document.write(" Please enter correct password ")    
}


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting);
}
else {
    greeting = "Good evening";
    document.write(greeting);
}



var time =  window.prompt("Enter any time in 24 hours clock (1300) : ");

if (time  >= 0000 && time < 1200 ) {
    document.write ("Good Morning" )
}
else if (time  >= 1200 && time < 1700 ) {
    document.write ("Good Afternoon" )
}
else if (time  >= 1700 && time < 2100 ) {
    document.write ("Good Evening" )
}
else if (time  >= 2100 && time < 2359 ) {
    document.write ("Good Night" )
}
