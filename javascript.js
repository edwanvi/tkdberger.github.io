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
//ruse fight scene

function fight() {
    //send the user...somewhere.
    location.assign("http://reddit.com/r/fitemeirl");
}
function mercy() {
    //send user home
    location.assign("index.html");
}
function call() {
    clearElement("dialogContainer");
    var dialogBox = document.getElementById("dialogContainer");
    var newLine = document.createElement("li");
    var whatToSay = document.createTextNode("You called for help...");
    newLine.appendChild(whatToSay);
    newLine.setAttribute("class", "dialog");
    dialogBox.appendChild(newLine);
    //////////////////////////////
    newLine = document.createElement("li");
    whatToSay = document.createTextNode("But nobody came.");
    newLine.appendChild(whatToSay);
    newLine.setAttribute("class", "dialog");
    dialogBox.appendChild(newLine);
    /////////////////////////////
    window.setTimeout(keepCruising, 5000);
}
function eat() {
    clearElement("dialogContainer");
    var dialogBox = document.getElementById("dialogContainer");
    var newLine = document.createElement("li");
    var whatToSay = document.createTextNode("You ate something...this doesn't seem wise at the moment.");
    newLine.appendChild(whatToSay);
    newLine.setAttribute("class", "dialog");
    dialogBox.appendChild(newLine);
    //////////////////////////////
    window.setTimeout(keepCruising, 5000);
    /////////////////////////////
}
function keepCruising() {
    clearElement("dialogContainer");
    var dialogBox = document.getElementById("dialogContainer");
    var newLine = document.createElement("li");
    var whatToSay = document.createTextNode("The ruse cruise continues.");
    newLine.appendChild(whatToSay);
    newLine.setAttribute("class", "dialog");
    dialogBox.appendChild(newLine);
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
//utility function: remove all children of an element
function clearElement(id) {
    node = document.getElementById(id);
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    return true;
}
