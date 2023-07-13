function clickk() {
	document.querySelector("#cant").innerText--
	document.querySelector(".row").remove()
}

function clickk1() {
	document.querySelector("#cant").innerText--
	document.querySelector(".row1").remove()
}

function nameUser() {
	let value = prompt("Escribe un nuevo nombre")
	if(value !== "") {
		document.querySelector("#name").innerText = value
	}
}

function increm() {
	document.querySelector("#value").innerText++
}

function dismin() {
	document.querySelector("#value").innerText--
}
