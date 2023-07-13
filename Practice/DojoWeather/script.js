let click = document.querySelector('.nav');
click.addEventListener('click', () => {
	alert('Loagind wheather report...');
});

let cookie = document.querySelector('#cookie');
let btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
	cookie.remove();
});

let temp = document.querySelector('#temp');
let celsius = document.querySelectorAll('.red');
let nuevo = [];
celsius.forEach((element) => {
	let fahrenheit = element.innerText;
	nuevo.push(parseInt((fahrenheit * 9) / 5 + 32));
});

let celsius1 = document.querySelectorAll('.blue');
let nuevo1 = [];
celsius1.forEach((element) => {
	let fahrenheit = element.innerText;
	nuevo1.push(parseInt((fahrenheit * 9) / 5 + 32));
});

let change = document.querySelectorAll('.red');
let change1 = document.querySelectorAll('.blue');

let to = []
let to1 = []

let to1r = []
let to1b = []
for (let j = 0; j <= 3; j++) {
	to.push(change[j].innerText)
	to1.push(change1[j].innerText)
	to1r.push(change[j].innerText)
	to1b.push(change1[j].innerText)
}

for (let i = 0; i < nuevo.length; i++) { 
	to[i] = nuevo[i];
}

for (let i = 0; i < nuevo1.length; i++) { 
	to1[i] = nuevo1[i];
}

temp.addEventListener('change', (e) => {
	switch (e.target.value) {
		case '°F':
			for (let k = 0; k <= 3; k++) {
			document.querySelectorAll('.red')[k].innerText = to[k]
			document.querySelectorAll('.blue')[k].innerText = to1[k]
			}
			break;
		case '°C':
			for (let k = 0; k <= 3; k++) {
			document.querySelectorAll('.red')[k].innerText = to1r[k]
			document.querySelectorAll('.blue')[k].innerText = to1b[k]
			}
	}
});
