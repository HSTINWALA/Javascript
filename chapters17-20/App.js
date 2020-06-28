// var arr = [0,1,2,3][1,0,1,2][2,1,0,1]

for (var b = 1; b <= 10; b++) {
    document.write(b + "<br>")
}
document.write("<BR>");
document.write("<br> ")
var c = window.prompt("Enter number to show its multiplication");
var d = window.prompt("Enter the lenght of the table")

for (var e = 1 ; e <= d ; e++){
    document.write(c + " * " + e + " = " + c*e + "<br>")
}
document.write("<BR>");
document.write("<br> ")

var fruits = ["apple", "banana", "mango", "orange",
    "strawberry"];

for (var f = 0; f < fruits.length; f++) {
    document.write("Element at index " + f + " is " + fruits[f] + " <br>")
}
document.write("<BR>");
document.write("<br> ")

var counting ;
var Numbers = [];
var count = window.prompt("Total Number");
var i,j;
var Reverse ;
var Even ;
var Odd ;
var Series ;

document.write("Counting : ");
for (i = 0; i < count; i++) {
    Numbers.push(i + 1);   
    counting = Numbers[i];
    document.write(counting +",");
}

document.write("<BR>");
document.write("Even : 0,")
for ( j = 0; j < Numbers.length; j++) {
    if (j % 2 !== 0) {
        Even = Numbers[j];
        document.write(Even+",");
    }
}

document.write("<BR>");
document.write("Odd : ")
for ( j = 0; j < Numbers.length; j++) {
    if (j % 2 === 0) {
        odd = Numbers[j];
        document.write(odd+",");
    }
}
document.write("<BR>");
document.write("Series : ")
for ( j = 0; j < Numbers.length; j++) {
    if (j % 2 !== 0) {
        Series = Numbers[j];
        document.write(Series +"k,");
    }
}

document.write("<BR>");
document.write("Reverse : ");
Reverse =  Numbers.reverse();
document.write(Reverse);

document.write("<BR>");

var bakery = ["cake", "apple pie", "cookies", "chips", "patties"];
var order = window.prompt("Welcome to ABC Bakery , what you wnt to order sir/madam?");


for (var i = 0; i < bakery.length; i++) {
    if (order === bakery[i]) {

        alert(order + " is available at index " + i + " in our bakery");
        break;
    }

}

 window.alert("we are sorry " + order + " is not available in our bakery");



number = ["24", "53", "78", "91", "12"];

num = [24, 53, 78, 91, 12];
document.write("Max : ");
var maxValue = Math.max.apply(null, num);
document.write(maxValue);
document.write("<BR>");
document.write("Min : ");
var minValue = Math.min.apply(null, num);
document.write(minValue);

document.write("<BR>");

var numbers;
 for (var a = 1; a <= 20 ; a++){
     document.write(a*5 + ",");
 }
