function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


function show() {
  var x = document.getElementById("gpa");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function update(names ) {
  var table,tr,td,i,k,j;
  k=0;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1 ; i <6; i++) {   
    for(j=3;j<15;j++) {
      td = tr[i].getElementsByTagName("td")[j];
      
      if(td.innerHTML===" No Lab ") {
        j=j+1;
        td = tr[i].getElementsByTagName("td")[j];
      }
      td.innerHTML=names[k];
      k=k+1;
    }
  }
  for (i = 6 ; i <tr.length; i++) {
    for(j=3;j<14;j++) {
      td = tr[i].getElementsByTagName("td")[j];
      td.innerHTML=names[k];
      k=k+1;
    }   
  }
}


const res= localStorage.getItem('result');

// import { nour } from "../../Mansour/jsMM/accounts";
// import { mans } from "../../Mansour/jsMM/accounts";
// import { alimustafa } from "../../Mansour/jsMM/accounts";
// import { farah } from "../../Mansour/jsMM/accounts";
// import { aya } from "../../Mansour/jsMM/accounts";
// import { alisaker } from "../../Mansour/jsMM/accounts";
// import { abed } from "../../Mansour/jsMM/accounts";

import { Accounts } from "../../Mansour/jsMM/accounts.js";

const account = new Accounts();

function grades() {
  var txtValue = res;
      
      if (txtValue=== account.nour.username) {
        update(["Failed","12/2/2023",1,3,2,1,1,4,1,2,15,"F","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
      if (txtValue=== account.farah.username ) {
        update(["Passed","12/2/2023",1,3,2,1,1,4,1,40,50,"D","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Passed","15/2/2023",	4,5,5,18,5,10,40,90,"A","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
      if (txtValue=== account.alimustafa.username) {
        update(["Failed","12/2/2023",0,0,0,0,0,0,0,0,0,"F","Failed","12/2/2023",0,0,0,0,0,0,0,0,0,"F","Failed","13/2/2023",0,0,0,0,0,0,0,0,0,"F","Failed","13/2/2023",0,0,0,0,0,0,0,0,0,"F","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"B-","Failed","14/2/2023",0,0,0,0,0,0,0,0,"F","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",0,5,5,5,0,10,40,80,"B+"]);
      }
      if (txtValue=== account.aya.username) {
        update(["Passed","12/2/2023",5,5,2,1,1,10,1,40,88,"B+","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
      if (txtValue=== account.mans.username) {
        update(["Failed","12/2/2023",1,3,2,0,0,4,0,0,10,"F","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Failed","15/2/2023",	4,4,3,9,5,10,5,60,"F"]);
      }
      if (txtValue=== account.alisaker.username) {
        update(["Passed","12/2/2023",1,3,2,1,1,1,1,2,11,"F","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
}

    
      
      window.onload=grades();


      function total(){
        var  table, tr, i,sum,td,txtValue;
        sum=0;
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        for (i = 1; i < 6; i++) {
          td = tr[i].getElementsByTagName("td")[13];
          txtValue = parseInt(td.innerHTML);

          if (!isNaN(txtValue)) {
            sum += txtValue;  
          }
        }
        for (i = 6; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[12];
          txtValue = parseInt(td.innerHTML);

          if (!isNaN(txtValue)) {
            sum += txtValue;        
          } 
        }
        sum/=7;
        sum=sum.toFixed(2);
        if (sum<50){
          par=document.querySelector(".p").textContent = 'Your total grade is '+ sum + res+' hard luck ' + ':( !!';
        } else {
          par=document.querySelector(".p").textContent = ' Your total grade is '+ sum + ' Congrats '+ res+'  :) !!';
        }
}
window.onload=total();

function failed(){
  var  table, tr, i,td;
  sum=0;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3].innerHTML;
    if(td==="Failed"){
      tr[i].style.backgroundColor = "var(--failed)";    
    }

  }
}
window.onload=failed();





