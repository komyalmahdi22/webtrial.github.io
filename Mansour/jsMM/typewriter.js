// Get the result from the input page
const res = localStorage.getItem('result');
var i = 0;
var txt;


// "Database" , to match the the username from thr input to an already made "account" 
//and display the first name of the user

import { Accounts } from "../jsMM/accounts.js";
const acc = new Accounts();

switch (res) {
  case acc.mans.username:
    txt = 'Welcome ' + acc.mans.first_name + '!!';
    break;

  case acc.nour.username:
    txt = 'Welcome ' + acc.nour.first_name + '!!';
    break;
  
  case acc.farah.username:
    txt = 'Welcome ' + acc.alimustafafarah.first_name + '!!';
    break;

  case acc.alimustafa.username:
    txt = 'Welcome ' + acc.alimustafa.first_name + '!!';
    break;

  case acc.aya.username:
    txt = 'Welcome ' + acc.aya.first_name + '!!';
    break;

  case acc.alisaker.username:
    txt = 'Welcome ' + acc.alisaker.first_name + '!!';
    break;

  case acc.abed.username:
    txt = 'Welcome ' + 'Dr.' + acc.abed.first_name + '!!';
    break;

  default:
    txt = 'Welcome Guest!'
    break;
}  

//the animation speed;
var speed = 100;

//Main idea: as long as i is less than the length of the string given , it displays 1 character at a time
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}   
// Call the function when the page loads
window.onload = typeWriter();
