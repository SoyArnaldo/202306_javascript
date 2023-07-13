for(let i = 1; i <= 20; i++) {
	if(i % 2 === 1) {
		console.log(i)
	}
}

let i = 100;
while ( i >= 0) {
	if(i % 3 === 0) {
		console.log(i)
	}
	i--
}

for(let i = 4; i > -4; i-= 1.5) {
	console.log(i)
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum += i
}
console.log(sum)

let product = 1;
for (let i = 1; i <= 12; i++) {
	product *= i
}
console.log(product)