//initialize variables for some basic page controller
//think RobotMap.h
var numberOfNavLinks = "5";
var audio = new Audio('sounds/Flowey_bosslaugh.ogg');
function helloworld() {
	alert("Hello World!");
	alert("This is what happens when I learn javascript.");
}
function youIdiot() {
	audio.play();
	alert("* Y O U   I D I O T .");
	location.assign("ruse.html");
}

function bodyInit () {
	document.getElementById("nav").setAttribute("colspan", numberOfNavLinks);
	//alert("My body is ready");
}
