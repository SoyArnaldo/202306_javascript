let displayDiv =  document.querySelector("#display");
function calculate() {	
	displayDiv.innerText = eval(displayDiv.innerText)
}

function press(n) {
	if(displayDiv.innerText === "0" && displayDiv.innerText === "0.") {
		displayDiv.innerText = n
	}
	else if (displayDiv.innerText !== "00" && displayDiv.innerText === "0") {
		displayDiv.innerText += n
	}
	else if(displayDiv.innerText === "0.") {
		displayDiv.innerText += n
	}else {
		displayDiv.innerText += n
	}
}

function setOP(operator) {
	displayDiv.innerText += operator
}

function clr() {
	let string = document.querySelector("#display").innerText;
	if(string.substr(0, string.length - 1)) {
	document.querySelector("#display").innerText = string.substr(0, string.length - 1);
	}
	else {
		document.querySelector("#display").innerText = "0"
	}
}