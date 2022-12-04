
 var myWindow;
   var i = 0;
 var txt = 'blabla blabla';


function openWin() {
 myWindow = window.open("", "", "width=200,height=100");
}
function typeWriter() {
    if (i < txt.length) {
     document.getElementById("demo").innerHTML += txt.charAt(i);
       i++;
      setTimeout(typeWriter, 1000);
     }
   } 




