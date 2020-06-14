var degree = [" SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log(degree);

var student = ["Michael", "John", "tony"];
var score = [320, 230, 480, 120, 110, 500];

console.log("score of " + student[0] + " is " + score[0] + ".percentage : " + score[0] / 500 * 100 + "%")
console.log("score of " + student[1] + " is " + score[1] + ".percentage : " + score[1] / 500 * 100 + "%")
console.log("score of " + student[2] + " is " + score[2] + ".percentage : " + score[2] / 500 * 100 + "%")

var color = ["Blue", "Red", "Green", "Purple", "Grey"]
color.push("Orange");
document.write(color)
document.write("<br>")
color.splice(2, 0, "Brown");
document.write(color);
document.write("<br>")
color.unshift("Black", "White");
document.write(color);
document.write("<br>")
color.pop("Orange");
document.write(color)
document.write("<br>")
color.splice(1, 1);
document.write(color);
document.write("<br>")
color.shift();
document.write(color);

document.write("<br>")
document.write("Score of student : " + score)
document.write("<br>")
var newscore = score.sort();
document.write("Ordered score of student : " + newscore)


document.write("<br>")
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
var newcities = cities.slice(2, 4)
document.write(newcities)

document.write("<br>")
var Sentence = ["This ", " is ", " my ", " cat"];
document.write("Array : " + Sentence + "<br>");
var newsentence = Sentence.join(' ');
document.write("String : " + newsentence + ".");

document.write("<br> From Starting :")
var device = ["Keyboard", "Mouse", "Printer", "Moniter"];
document.write(device + ",");
document.write("<br>")
device.shift();
document.write(device + ",");
document.write("<br>")
device.shift();
document.write(device + ",");
document.write("<br>")
device.shift();
document.write(device + ",");
document.write("<br>")
device.shift();
document.write(device + ",");
document.write("<br>")


document.write("<br> From End :")
var device = ["Keyboard", "Mouse", "Printer", "Moniter"];
document.write(device + ",");
document.write("<br>")
device.pop();
document.write(device + ",");
document.write("<br>")
device.pop();
document.write(device + ",");
document.write("<br>")
device.pop();
document.write(device + ",");
document.write("<br>")
device.pop();
document.write(device + ",");
document.write("<br>")
document.write("<br>")

       

