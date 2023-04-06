// // by Ali Mustafa


// /* function for shaking pass at error in saving pass */
// function compare(){
//     //value of pass
//     let val1 = document.getElementById("pass").value;
    
//     //value of save pass
//     let val2 = document.getElementById("savepass").value;
    
//     //comparing passwords (if they are the same it returns 0)
//     const  res = val1.localeCompare(val2);
    
//     //id of the div to be shaked at error
//     const element2 = document.getElementById("cont");
    
//     //regular expression 
//     var paswd=  /^(?=.*[0-9])(?=.*[?!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!?@#$%^&*]{7,15}$/;
    
//     //length of pass
//     var length = val1.length;
    
//     //check if passwords are not the same(res!=0)
//     if(res)
//     {
//         //add shake class to the div due to error
//         element2.classList.add("shake");
        
//         //add massage due to type of error
//         document.getElementById("demo").innerHTML = 'Passwords are not the same';
//     }
//     else //if pass are the same(res==0)
//     {
//         //check if pass is short or tall(range must be btw 7 and 15)
//         if(length<7 || length >15) 
//         {
//             //add shake to the div due to error
//             element2.classList.add("shake3");
            
//             //add massage due to type of error
//             document.getElementById("demo").innerHTML = 'Password must be between 7 and 15 characters';
            
//             return 1;//no need to continue
//         }
//         if(val1.match(paswd))//check if pass is strong(match returns array of matches)
//         {
//             //pass is strong so mission accomplished,go to the next page
//             window.location.replace("mansour.html");
//         }
//         else   //check if pass is week(match returns null if no matching btw the input and the regexp)
//         {
//             //pass is week,shake
//             element2.classList.add("shake2");
            
//             //add massage due to type of error
//             document.getElementById("demo").innerHTML = 'Password must include letters,numbers and a special character';
//         }
//     }
// }


// /* function to check if inputs are empty or not */

// const button = document.getElementById('myButton');
// const id = document.getElementById('stid');

// button.addEventListener('click', function() {
//   if (required()) { // call the form validator function
//     const idvalue = id.value;
//     localStorage.setItem('result', idvalue);
//     window.location.href = "/Mansour/htmlMM/mansour.html";
//   }
// });

// function required() {
//   var empt = document.forms["form1"]["shaked"].value;
//   var empt2 = document.forms["form1"]["stid"].value;
//   const element = document.getElementById("cont2");
//   const element2 = document.getElementById("cont3");

//   if (empt == "" && empt2 == "") {
//     element.classList.add("shake");
//     element2.classList.add("shake");
//     return false;
//   }
//   if (empt == "") {
//     element.classList.add("shake");
//     return false;
//   }
//   if (empt2 == "") {
//     element2.classList.add("shake");
//     return false;
//   }
//   return true; // return true if the form is valid
// }


// /* function for pass eye */


// function toggle(y) {
//     //id of pass input to check if it is written in pass type or not  
//     var x = document.getElementById("name");    

//     //id of eye icon to change during toggle
//     var z = document.getElementById("passeye");     
    
//     //if input is hidden(password type)
//     if (x.type === "password") {
    
//       //toggle it to unhidden(text type)
//       x.type = "text"; 
    
//       //toggle eye icon
//       z.name="eye-off-outline";
    
//     //if input is unhidden(text type)
//     } else {
    
//       //toggle it to hidden(pass type)
//       x.type = "password";
    
//       //toggle eye icon
//       z.name="eye-outline";
//     }
//   }


// by Ali Mustafa
import { Accounts } from '../../Mansour/jsMM/accounts.js';

/* function for shaking pass at error in saving pass */
function compare(){
    //value of pass
    let val1 = document.getElementById("pass").value;
    
    //value of save pass
    let val2 = document.getElementById("savepass").value;
    
    //comparing passwords (if they are the same it returns 0)
    const  res = val1.localeCompare(val2);
    
    //id of the div to be shaked at error
    const element2 = document.getElementById("cont");
    
    //regular expression 
    var paswd=  /^(?=.*[0-9])(?=.*[?!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!?@#$%^&*]{7,15}$/;
    
    //length of pass
    var length = val1.length;
    
    //check if passwords are not the same(res!=0)
    if(res)
    {
        //add shake class to the div due to error
        element2.classList.add("shake");
        
        //add massage due to type of error
        document.getElementById("demo").innerHTML = 'Passwords are not the same';
    }
    else //if pass are the same(res==0)
    {
        //check if pass is short or tall(range must be btw 7 and 15)
        if(length<7 || length >15) 
        {
            //add shake to the div due to error
            element2.classList.add("shake3");
            
            //add massage due to type of error
            document.getElementById("demo").innerHTML = 'Password must be between 7 and 15 characters';
            
            return 1;//no need to continue
        }
        if(val1.match(paswd))//check if pass is strong(match returns array of matches)
        {
            //pass is strong so mission accomplished,go to the next page
            window.location.replace("mansour.html");
        }
        else   //check if pass is week(match returns null if no matching btw the input and the regexp)
        {
            //pass is week,shake
            element2.classList.add("shake2");
            
            //add massage due to type of error
            document.getElementById("demo").innerHTML = 'Password must include letters,numbers and a special character';
        }
    }
}


/* function to check if inputs are empty or not */

const button = document.getElementById('myButton');
const id = document.getElementById('stid');

button.addEventListener('click', function() {
  if (required()) { // call the form validator function
    const idvalue = id.value;
    localStorage.setItem('result', idvalue);
    window.location.href = "/Mansour/htmlMM/mansour.html";
  }
});



function required() {
  const account = new Accounts();


  var empt = document.forms["form1"]["stid"].value;
  var empt2 = document.forms["form1"]["shaked"].value;
  const element2 = document.getElementById("cont2");
  const element = document.getElementById("cont3");

  if (empt === "" && empt2 === "") {
    element.classList.remove("shake");
    element2.classList.remove("shake");
    element.classList.add("shake");
    element2.classList.add("shake");
    return false;
  }
  if (empt === "") {
    element.classList.remove("shake");
    element.classList.add("shake");
    return false;
  }
  if (empt2 === "") {
    element2.classList.remove("shake");
    element2.classList.add("shake");
    return false;
  }
  
  switch (empt) {
    case account.alimustafa.username:
      if(empt2 === account.alimustafa.password)
        return true;
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");
        return false;
      }
    
    case account.mans.username:
      if(empt2 === account.mans.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

      
    case account.nour.username:
      if(empt2 === account.nour.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

    case account.farah.username:
      if(empt2 === account.farah.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

    case account.aya.username:
      if(empt2 === account.aya.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

    case account.alisaker.username:
      if(empt2 === account.alisaker.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

    case account.abed.username:
      if(empt2 === account.abed.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }


    default:
      element.classList.add("shake");
      return false;
  }
}


/* function for pass eye */


function toggle(y) {
    //id of pass input to check if it is written in pass type or not  
    var x = document.getElementById("name");    

    //id of eye icon to change during toggle
    var z = document.getElementById("passeye");     
    
    //if input is hidden(password type)
    if (x.type === "password") {
    
      //toggle it to unhidden(text type)
      x.type = "text"; 
    
      //toggle eye icon
      z.name="eye-off-outline";
    
    //if input is unhidden(text type)
    } else {
    
      //toggle it to hidden(pass type)
      x.type = "password";
    
      //toggle eye icon
      z.name="eye-outline";
    }
  }

