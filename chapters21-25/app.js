var fname = window.prompt("Enter First Name : ");
var lname = window.prompt("Enter Last Name : ");
var name = (fname + ' ' + lname)
document.write('Welcome ' + name);

var mobile = window.prompt("Enter your favorite mobile phone model : ");
var mob_len = mobile.length;
document.write('My favorite mobile is : '+mobile + '<br>')
document.write('Lenght of string : '+mob_len);

var country  = "Pakistani"
var country_index = country.indexOf('n');
document.write ("Index of 'n' :  " + country_index);

var last_index = "Hello World"
var str_index = last_index.lastIndexOf('l');
document.write ("Index of 'l' :  " + str_index);

var country  = "Pakistani"
var country_index = country.charAt(3);
document.write ("Character at Index 3 :  " + country_index);

var fname = window.prompt("Enter First Name : ");
var lname = window.prompt("Enter Last Name : ");
var name = fname.concat(lname);
document.write('Welcome ' + name);

var city = "Hyderabad";
var replace_city = city.slice(5);
document.write('City : ' + city + '<br>')
document.write('After replacement : Islam' + replace_city)

var message = ("Ali and Sami are best friends. They play cricket and football together.");
var replace_msg = message.replace(/and/g , '&');
document.write(replace_msg)

var str = "472";
var type = typeof str;
document.write('Value : "' + str + '"<br>');
document.write('Type : '+ type + '<br>');
var num = parseInt(str);
var type = typeof num;
document.write('Value : ' + num + '<br>');
document.write('Type : '+ type );

var nuts = "peanuts";
var upper_nuts = nuts.toLocaleUpperCase();
document.write('User Input : '+ nuts + '<br>');
document.write('UPPER CASE : '+ upper_nuts);

var lang = "javascript";
var title_lang = lang.charAt(0).toUpperCase() + lang.slice(1);
document.write('User Input : '+ lang + '<br>');
document.write('Title Case : '+ title_lang);


var num = "35.36"
document.write('Number : ' + num + '<br>');
var str = num.toString();
var str1 = str.slice(0,2) + str.slice(3,5)
document.write('Result : '+ str1 );

var user = prompt("Enter username : ");
if ((user.match(/!/g) == "!") || (user.match(/./g) == ".") || (user.match(/,/g) == ",") || (user.match(/@/g) == "@")) {
    alert('Incorrect User name. Please enter a valid username .');
}
else {
    alert(user)
}

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = window.prompt("Welcome to ABC Bakery , what you wnt to order sir/madam?");

order = order.toUpperCase();
alert(order)

for (var i = 0; i < bakery.length; i++) {
    if (order === bakery[i].toUpperCase()) {
        alert(order + " is available at index " + i + " in our bakery");
        break;
    }
}
alert('Sorry ' + order + ' not avalible in bakery')

var pass = prompt("Enter Password : ");
if ((pass.match(/[0-9]/g).slice(0,2)) || (pass.length > 6)) {
    alert('Incorrect password. Please enter a correct password .');
}

else {
    alert('Correct Password')
}


var university = "University of Karachi";
var uni = university.split("");
for (i=0 ; i < uni.length ; i++){
    document.write(uni[i] + '<br>');
}

var country  = prompt("Enter Country");

var country_last = country.charAt(country.length-1);
document.write ("Input Character :  " + country + "<br>");
document.write ("Last Character is :  " + country_last);

var sent = "The quick brown fox jumps over the lazy dog";
var lower = sent.toLowerCase();
var counting = (lower.match(/the/g) || []).length;
document.write(sent + '<br>')
document.write('There are ' + counting + ' occurrence(s) of the word' + " 'the'." );
