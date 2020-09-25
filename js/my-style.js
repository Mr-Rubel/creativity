function timer(){
	var newTime = new Date();
	var hours = newTime.getHours();
	var minutes = newTime.getMinutes();
	var seconds = newTime.getSeconds();
	var ss ="AM";
	if(hours>10){
		hours=hours-12
		ss="PM"
	}
	if(hours<10){
		hours = "0"+hours;
	}

	if(minutes<10){
		minutes="0"+minutes;
	}
	if(seconds<10){
		seconds="0"+seconds;
	}
	document.querySelector(".hour").innerHTML = hours;
	document.querySelector(".minute").innerHTML = minutes;
	document.querySelector(".second").innerHTML = seconds;
	document.querySelector(".session").innerHTML = ss;


}
setInterval(timer,1000);

 	var text = ["web Designer","web Developer","motivational speaker"];
	var count = 0;
	var index = 0;
	var currentText = "";
	var latter = "";

(function type(){
	if( count === text.length){
		count = 0;
	}
	currentText = text[count];
	latter = currentText.slice(0, ++index);
	document.querySelector(".headline").textContent = "I am a "+latter+" |";
	if(latter.length === currentText.length){
		count++;
		index = 0;
	}
setTimeout(type,300);

}());

