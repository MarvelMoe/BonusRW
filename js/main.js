function timeSet() {
    var currentTime = new Date();
    var h = currentTime.getHours();	
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var change = "AM"

    //change military time to standard time with swtitch to AM

 if (h > 12) {
    h = h - 12;
    change = "PM"
    } else if (h === 0) {
       h = 12;
}

    // add a zero in front of times that are 09:04 PM for example
  
 if (h < 10) {
	 h = "0" + h;
}
if (m < 10) {
    m = "0" + m 
}
if (s < 10) {
    s = "0" + s
}

 //display the clock on the screen
var clockWork = document.getElementById('time');

clockWork.textContent = h + ":" + m + ":" + s + " " +  change

// 1 second timer
setTimeout("timeSet()", 1000)

 
}
timeSet()

function twentyFour() {
    var audio24 = document.createElement("audio")
    audio24.setAttribute("src", "ticktock.mp3")
    audio24.autoplay = true;
    
}

document.getElementById("time").addEventListener("mouseover", twentyFour)

