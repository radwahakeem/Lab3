 function start(){
    alert("Clock Started")
    var id=setInterval(Time,1000);
}
function Time(){
    
    var time=new Date();
    var clocks=document.getElementById("clock");
    clocks.innerText=time.toLocaleTimeString();
} 