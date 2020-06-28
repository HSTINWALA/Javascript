// function current(){
//     var sysdate = new Date();
//     document.write(sysdate + '<br>');
// }

// current();

// var fname = prompt('Enter First Name : ')
// var lname = prompt('Enter Last Name : ')

// function greeting() {
//     document.write('Welcome  <b>' + fname +' ' +lname + ' </b> to Mobile and web Application Course <br>')
// }

// greeting();


// var num1 = prompt("Enter any Number from  0-9 : ")
// var num2 = prompt("Enter any Number from  0-9 : ")

// function add() {
//     var add = parseInt(num1) + parseInt(num2);
//     document.write(add);
// }

// add();


// function calculate(num1, op , num2) {
//     if (op === '+') {
//         var add = num1 + num2
//         return add;
//     }
//     else if (op === '-') {
//         var sub = num1 - num2
//         return sub;
//     }
//     else if (op === '*') {
//         var multi = num1 * num2
//         return multi;
//     }
//     else if (op === '/') {
//         var div = num1 / num2
//         return div;
//     } else {
//         return 'wrong Operater';
//     }

// }

// document.write(calculate(2 ,'+' , 4 ) + '<br>');
// document.write(calculate(12 ,'-' , 4)+ '<br>');
// document.write(calculate(5 ,'*' , 6)+ '<br>');
// document.write(calculate(36 ,'/' , 4)+ '<br>');



// function Square(num1) {
//     var sqr = num1 * num1
//     return sqr;
// }

// document.write(Square(8) +'<br>');

// function Factorial(num1) { 
//     var answer = 1; 
//     for (var i = 2; i <= num1; i++) 
//         answer = answer * i; 
//     return answer; 
// }

// document.write(Factorial(5));


// function counting(num1,num2) {
//     for (i=num1 ; i<=num2 ;i++){
//         document.write(i + ", ")
//     }
// }

// counting(2,5);

// function Hypotenus(base, perp) {
//     var b = Math.sqrt(base * base + perp * perp);
//     return b;p

// }

// console.log(Hypotenus(3, 4));

// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt ("Enter a whole number for the width of your rectangle.");

// function area (length, width) {
//     var b = length * width;
//     return b;
// }

// document.write(area(length, width));

// function area (length, width) {
//     var b = length * width;
//     return b;
// }

// document.write(area(3, 4));


// function palindrome(str) {
//     var lowRegStr = str.toLowerCase();
//     var reverseStr = lowRegStr.split('').reverse().join('');
//     if (reverseStr === lowRegStr) {
//         return "It is Palindrome";
//     }
//     else {
//         return "It is not Palindrome"
//     }
// }

// console.log(palindrome("Madam"));

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSResourceS.com', 'o'));

// function circumfrenceofcircle(radius) { 
//     var calc = 2 * 22 / 7 * radius; 
//     return calc;
// }

// document.write ("Circumfrence of circle is " + circumfrenceofcircle(2)); 

function areaofcircle(radius) { 
    var calc = 22 / 7 * (radius * radius); 
    console.log(calc);
    return calc;
}

document.write ("Area of circle is " + areaofcircle(3)); 