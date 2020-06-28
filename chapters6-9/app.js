// var num1 = 10
// document.write("Result : <br>")
// document.write("The value of a is : " + num1 +"<br>")
// num2 = ++num1
// document.write("The value of ++a is : " + num2 +"<br>")
// document.write("Now the value of a is : " + num2 +"<br>")
// num2 = num1++
// num3 = num2++
// document.write("The value of a++ is : " + num3 +"<br>")
// document.write("Now the value of a is : " + num2 +"<br>")
// num2 = --num1
// document.write("The value of --a is : " + num2 +"<br>")
// document.write("Now the value of a is : " + num2 +"<br>")
// num2 = num1--
// num3 = num2--
// document.write("The value of --a is : " + num3 +"<br>")
// document.write("Now the value of a is : " + num2 +"<br>")

// var a = 2, b= 1;
// document.write("a is : " + a +"<br>")
// document.write("b is : " + b +"<br>")
// var result = --a - --b + ++b + b--;
// document.write("Result is : " + result +"<br>")
// console.log(--a)
// console.log(--a - --b)
// console.log(--a - --b + ++b)
// console.log(--a - --b + ++b + b--)

// var name = prompt("Enter full name : ")
// document.write("Welcome " + name + " to Web and mobile Application class " + "<br>")


// var num1 = prompt("Enter a Number : ")
// if (num1 !== ''){
//     for (var i =1;i<=12;i++){
//         var result = num1*i
//         console.log(num1 + 'x' + i +'=' + result)
//     }
// }
// else {
//     for (var i =1;i<=12;i++){
//     var result = 5*i
//     console.log(5 + 'x' + i +'=' + result)
// }
// }

var subject1 = 'English', subject2 = 'Math', subject3 = 'urdu'
var obtain1 = [54, 54, 48]
document.write("<table>")
document.write("<tr><td>Subject</td>" + " " + "<td>Total Marks</td>" + " " + "<td>Obtained Marks</td>" + " " + "<td>Percentage</td></tr>" + "<br>")
document.write("<tr><td>"+subject1 +" </td><td> 100 </td><td>" + obtain1[0] + "</td><td> " + obtain1[0] / 100 * 100 + "%</td></tr><br>")
document.write("<tr><td>"+subject2 + "</td><td> 100 </td><td>" + obtain1[1] + "</td><td> " + obtain1[1] / 100 * 100 + "%</td></tr><br>")
document.write("<tr><td>"+subject3 + "</td><td> 100 </td><td>" + obtain1[2] + "</td><td> " + obtain1[2] / 100 * 100 + "%</td></tr><br>")

var num1 = parseInt(obtain1[0])
var num2 = parseInt(obtain1[1])
var num3 = parseInt(obtain1[2])

var total = num1 + num2 + num3
var perc = total / 300 * 100

console.log(perc)
document.write("<tr><td></td><td><b>300</b>" + "</td><td><b>" + total + "</b></td><td><b>" + perc + "%</b></td></tr><br>")




