let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

let array = [btn, btn1, btn2];
array.forEach((element) => {
	element.addEventListener('click', (e) => {
		switch (e.target) {
			case array[0]:
				document.querySelector('#like').innerText++;
				break;
			case array[1]:
				document.querySelector('#like1').innerText++;
				break;
			case array[2]:
				document.querySelector('#like2').innerText++;
				break;
		}
	})
});
