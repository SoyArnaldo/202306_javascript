let btn = document.querySelectorAll('.btn');
for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', (e) => {
		if (e.target.innerText === 'Login') {
			e.target.innerText = 'Logout';
		} else if (e.target.innerText === 'Logout') {
			e.target.innerText = 'Login';
		}
		if (e.target.innerText === 'Add Definition') {
			e.target.remove();
		}
		if (e.target.innerText === '13 likes' || e.target.innerText === '37 likes') {
			alert('Ninja was liked');
		}
	});
}	