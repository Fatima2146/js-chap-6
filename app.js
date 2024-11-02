// Chapter 6:
// Question 1.
let a = 10;
++a;
document.write("The value of ++a: ",a,"<br>","now the value of a is 11 <br> <br> <br>");
a++;
document.write("The value of a++ is: 11","<br>","Now the value of a is: ",a," <br> <br> <br>");
--a;
document.write("The value of --a is: ",a,"<br>","Now the value of a is: ",a," <br> <br> <br>");
a--;
document.write("The value of a-- is: 11","<br>","Now the value of a is: ",a," <br> <br> <br>");

// Question 2.
// let a = 2;
// let b = 1;
// --a - --b + ++b + b--;

// // --a; 
// // --b; 
// // ++b; 
// // b--;
// document.write("a is: 2 <br> b is: 1 <br> Result is: ",a,b);

// Question 3.
let user = prompt("What is your name");
let name1 = alert("Ayesha Ashraf");
alert("Hello Ayesha Ashraf");

// Question 4.
let num = prompt("Enter anumber to generate a table");
let nub = 2;
for(let i = 1; nub<=10; i++){
    document.write(nub + " X " + i + " = "+ nub*i +"<br>");
     }
if(num == 2){
    document.write(i);
}
else{
    document.write(num == 5);
}

// Question 5.
let enter = prompt("Enter 3 subjects name??");
let marks1 = parseInt(prompt("Enter the obtained marks of FIRST subject from 100"));
let marks2 = parseInt(prompt("Enter the obtained marks of SECOND subject from 100"));
let marks3 = parseInt(prompt("Enter the obtained marks of THIRD subject from 100"));

let first = "Computer  ";
let sec = "English  ";
let thi = "Art & Craft  ";
let total = 100;
let total2 = marks1 + marks2 + marks3;
let overalltotal = total * 3;
let percentage = (total2 / overalltotal) * 100;
document.write("SUBJECT  &nbsp&nbsp" , "  TOTAL MARKS &nbsp&nbsp  " , "OBTAINED MARKS &nbsp&nbsp","PERCENTAGE <br>");

document.write(first + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + total + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + marks1 , "<br>");

document.write(sec + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + total + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + marks2 , "<br>");

document.write(thi + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + total + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + marks3 , "<br> <br> <br>");

document.write("TOTAL &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", overalltotal ,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" , total2 , "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", percentage,"%" );
