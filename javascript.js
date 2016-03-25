//initialize variables for some basic page controller
//think RobotMap.h
var numberOfNavLinks = "5";
function helloworld() {
	alert("Hello World!");
	alert("This is what happens when I learn javascript.");
}
function youIdiot() {
	alert("* Y O U   I D I O T ."); 
	//return false;
}
function bodyInit () {
	document.getElementById("nav").setAttribute("colspan", numberOfNavLinks);
	alert("My body is ready");
}
