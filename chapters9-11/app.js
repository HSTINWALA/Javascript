// var city = window.prompt("Enter City Name : ");
// if (city === 'Karachi') {
//     document.write("Welcome to city of lights")
// }

// var gender = window.prompt("Enter Gender : ")
// if (gender === 'Male' || gender === 'male'){
//     document.write("Good Morning Sir");
// }
// else if (gender === 'Female'|| gender === 'female') {
//     document.write(" Good Morning Ma’am");
// } 

// var fuel = window.prompt(" Please input remaining fuel in car  : ")
// if (fuel < 0.25 s){
//     document.write("Please refill the fuel in your car");
// }
// else {
//     document.write("The fuel in your car is full.");
// } 


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ !== 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }


// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// var marks = prompt("Enter marks ")
// var total = 300
// var perc = marks/300*100

// if (perc >= 80){
//     var grade = 'A-one'
//     var remarks = 'Excellent'
// }
// else if(perc >= 70){
//     var grade = 'A'
//     var remarks = 'Good'
// }
// else if(perc >= 60){
//     var grade = 'B'
//     var remarks = 'You need to improve'
// }
// else{
//     var grade = 'Fail'
//     var remarks = 'Sorry'
// }

// document.write("Total Marks : " + total + "<br>")
// document.write("Marks Obtained : " + marks + "<br>")
// document.write("Percentage : " + perc + "<br>")
// document.write("Grade : " + grade + "<br>")
// document.write("Remarks : " + remarks + "<br>")

// var guess = prompt("Enter Any Number from 1 -10")
// var num = 5;

// if (guess != num) {
//     alert('Close enough to the correct answer');
// }
// else{
//     alert('Bingo! Correct Answer' );
// }

// var num = prompt("Enter Any Number ")
// if(num % 3 == 0)
// {
//     alert("Number is divisible by 3");
// }
// else
// {
//     alert("Number is not divisible by 3");
// }

// var num = prompt("Enter Any Number ")
// if(num % 2 == 0)
// alert(num +" is even.");
// else
// alert(num +" is odd.");

// var temp = prompt("Enter temperature")
// if (temp > 40 ){
//  alert("It is too hot outside.")
// }
// else if (temp > 30 ) {
//     alert("The Weather today is Normal.")
// } 
// else if (temp > 20 ) {
//     alert("Today’s Weather is cool.")
// }
// else if (temp > 10 ) {
//     alert("OMG! Today’s weather is so Cool.")
// }

var num1 = prompt("Enter Number1")
var num2 = prompt("Enter Number2")
var op = prompt("Enter operater")

if(op == '+'){
    var num3 = parseInt(num1) + parseInt(num2)
    alert(num1 + "+" +num2 +"="+ num3)
}
else if (op == '-'){
    var num3 = parseInt(num1) - parseInt(num2)
    alert(num1 + "-" +num2 +"="+ num3)
}
else if (op == '*'){
    alert(num1 + "*" +num2 +"="+ num1*num2)
}
else if (op == '/'){
    alert(num1 + "/" +num2 +"="+ num1/num2)
}
else if (op == '%'){
    alert(num1 + "/" +num2 +" *100 = "+ (num1/num2)*100)
}