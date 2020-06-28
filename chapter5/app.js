// var num1 = 3
// var num2 = 5
// var result = num1 + num2
// document.write("The Sum of " + num1+ " and "+ num2+ " is "+ result +"<br>");

// var result = num1 - num2
// document.write("The Sub of " + num1+ " and "+ num2+ " is "+ result+"<br>");

// var result = num1 * num2
// document.write("The Multi of " + num1+ " and "+ num2+ " is "+ result+"<br>");

// var result = num1 / num2
// document.write("The Div of " + num1+ " and "+ num2+ " is "+ result+"<br>");

// var num3;
// console.log("Value after variable declaration is: " + num3)
// num3 = 5;
// console.log("Initial value: " + num3)
// num3 = num3+1
// console.log("Value after increment is :" + num3)
// num3 = num3+7
// console.log("Value after addition is :" + num3)
// num3 = num3-1
// console.log("Value after decrement is :" + num3)
// num3 = num3 % 3 == '0'
// console.log("The remainder is : 0")

// var ticket = 600
// var movie = ticket*5
// console.log("The total cost to buy 5 ticket to a movie is "+movie+" PKR")

// var num1 = 2
// for (var i =1;i<=12;i++){
//     var result = 2*i
//     console.log(2 + 'x' + i +'=' + result)
// }

// var c = 25
// f = (c*9/5)+32
// console.log(c+"c is "+ f + "f")
// var f = 70 ;
// c = (f-32)*5/9
// console.log(f+"f is "+ c + "c")

// var item1 = 650
// var item2 = 100
// var qty1 = 3
// var qty2 = 7

// var total = (650*3)+(100*7)

// console.log("Price of item 1 is " + item1)
// console.log("Ordered quantity of item 1 is "+qty1)
// console.log("Price of item 2 is " + item2)
// console.log("Ordered Quantity of item 2 is "+qty2)
// console.log("Shipping charges is " + total)


// var marks = 980
// var obtain = 804
// var perc = (obtain/marks)*100 

// document.write("Total Marks :" + marks + " <br>")
// document.write("Marks Obtained  :" + obtain + " <br>")
// document.write("Percentage :" + perc + "% <br>")

// var dollar = 10
// var saudi = 25
// var convert1 = dollar * 104.80
// var convert2 = saudi * 28
// var PKR = convert1 + convert2

// document.write("Total Currency in PKR is " + PKR)

// var num1 = 5
// var arith = ((num1 + 5)*10)/2
// console.log(arith)

// var date = new Date;
// var year = date.getFullYear();
// var dob = 1995
// var age = year-dob

// document.write("Current year : "+ year+"<br>")
// document.write("Birth year : "+ dob+"<br>")
// document.write("Your age is  : "+ age+"<br>")

// var radius = 20;
// var circum = 2 * 22/7 * radius
// var area = 22/7 * (radius * radius)

// document.write("Radius of the circle : " + radius+"<br>")
// document.write("The Circumference is : " + circum+"<br>")
// document.write("The Area is : " + area+"<br>")


var date = new Date;
var year = date.getFullYear();
var dob = 1995
var age = year-dob

var snack = 'Chocolate Chip'
var maxi_age = 65
var total = (65*3)-(age*3)

document.write("Favourite Snack : " + snack+"<br>")
document.write("Current Age : " + age+"<br>")
document.write("Estimate Maximum Age : " + maxi_age+"<br>")
document.write("Amount of snacks per day : " + 3 +"<br>")
document.write("You will need "+ total +" to last you until the ripe old age of " + maxi_age)