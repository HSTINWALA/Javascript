var date = new Date();
document.write(date + '<br>');

var date = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
month = month[date.getMonth()];
document.write('Current Month : ' + month + '<br>');

var date = new Date();
var day = date.toString();
day = day.slice(0, 3);
document.write('Today is ' + day + '<br>');

var date = new Date();
var day = date.toString();
day = day.slice(0, 3);
if (day === 'Sat' || day === 'Sun') {
    document.write("It's Fun day.  <br>");
}
else {
    document.write("It's working day.  <br>");
}

var date = new Date();
var num = date.toString();
num = num.slice(8, 10);
if (num <= 15) {
    document.write("First fifteen days of the month  <br>");
}
else {
    document.write("Last days of the month.  <br>");
}

var date = new Date();
document.write('Current Date : '+date + '<br>');
var millisecond = date.getTime();
document.write('Elapsed Milliseconds since January 1 ,1970 : '+ millisecond + '<br>');
var minutes = (date.getTime()/3600);
document.write('Elapsed Minutes since January 1 ,1970 : '+ minutes + '<br>');

var date = new Date();
var time = date.toString();
time = time.slice(16, 18);
if (time < 12) {
    document.write("It's AM.  <br>");
}
else {
    document.write("It's PM.  <br>");
}

var date = new Date();
var lastDay = new Date(date.getFullYear() , date.getMonth() + 1, 0);
document.write("Last Date : " + lastDay+ "<br>");



var date = new Date(); 
var ramdan_date = new Date("04/24/2020"); 
var ramdan =  date.getTime() - ramdan_date.getTime(); 
var ramdan = ramdan / (1000 * 3600 * 24); 
var ramdan = Math.round(ramdan);
document.write(ramdan + " days have passed since 1st Ramdan ,2020" + "<br>"); 

var date = new Date();
var start_date = new Date("01/01/2020"); 
var second = date.getTime() - start_date.getTime();
document.write( date + " , " +second + " second had passed since beginning of 2020" + "<br>");


var date = new Date();
document.write(date + "  1 hour ago , it was ");
var hour = (date.getHours() -1);
var date = date.toString();
document.write(date.slice(0,16) + hour + date.slice(18)+ "<br>");

var date = new Date();
document.write(date + "  100 years back , it was ");
var hundred = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
document.write(hundred + "<br>");

var age = prompt("Enter your Age :")
var date = new Date();
var year = date.getFullYear();
var cal = (year - age)
document.write("Your age is : "+age +"<br> Your birth year is : "  + cal + "<br>");

var customer = prompt("Enter Customer Name : ")
var date = new Date();
var unit = prompt("Number Of Unit used : ")
var charges = 16
var amount = unit * charges
var surcharge = 350
var after = amount + surcharge
document.write("Customer Name : " + customer + "<br>")
document.write("Current Month : " + month + "<br>")
document.write("Number of units : " + unit + "<br>")
document.write("Charges per unit: " + charges + "<br><br>")
document.write("Net Amount Payable (within Due Date) : " +amount + "<br>")
document.write("Late Payment Surcharge: " +surcharge + "<br>")
document.write("Gross Amount Payable (after Due Date) : " + after + "<br>")