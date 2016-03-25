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

function bodyInit() {
	document.getElementById("nav").setAttribute("colspan", numberOfNavLinks);
	//alert("My body is ready");
}
function textProcess(){
    //process the text and add it to the fieldset as a <p>
    var input, fieldset;
    input = document.getElementById("textTest").value;
    fieldset = document.getElementById("field");
    var newPara = document.createElement("p");
    var newParaText = document.createTextNode(input);
    newPara.setAttribute("name", "cannonFodder");
    newPara.appendChild(newParaText);
    fieldset.appendChild(newPara);
}
function humanSigh(){
    //the human sigh acts as a reset button
    node = document.getElementById("field");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}