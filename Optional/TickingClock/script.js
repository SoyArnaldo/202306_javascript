let hrs = document.querySelector("#hour")
let min = document.querySelector("#minutes")
let scd =  document.querySelector("#seconds")
function ticking() {
	let construc =  new Date()
	let hours =  construc.getHours()
	let minutes =  construc.getMinutes()
	let seconds =  construc.getSeconds() 
	hrs.style.transform = `rotateZ(${(hours * 3600) + (minutes * 0.5) }deg)`
	min.style.transform = `rotateZ(${(minutes * 6) + (hours / 0.1) }deg)`
	scd.style.transform = `rotateZ(${seconds * 6}deg)`
}

setInterval( ticking, 1000);
