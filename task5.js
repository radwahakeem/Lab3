  var myWindow;

function openWin() {
  myWindow = window.open("", "", "width=200,height=100");
  myWindow.document.write("typing message");
  setTimeout("myWindow.close()",1000) 

}
  