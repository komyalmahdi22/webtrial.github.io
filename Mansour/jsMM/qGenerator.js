// Quotes Generator 
// Every quote is an index of the array and a random index is picked each time

var textArray = [
  '"The roots of education are bitter, but the fruit is sweet." - Aristotle',
  '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
  '"The beautiful thing about learning is that no one can take it away from you." - B.B. King',
  '"Learning never exhausts the mind." - Leonardo da Vinci',
  '"Education is the key to unlock the golden door of freedom." - George Washington Carver',
  '"An investment in knowledge pays the best interest." - Benjamin Franklin'
]
var randomNumber = Math.floor(Math.random() * textArray.length);
document.getElementById('my-paragraph').innerText = textArray[randomNumber]; 
