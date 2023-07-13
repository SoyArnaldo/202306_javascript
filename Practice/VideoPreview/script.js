let video = document.getElementById('videomain');
video.addEventListener('click', () => {
	//Navegador tiene politicas de reproduccion automatica, con el fin de brindar una mejor experiencia a los usuarios
	video.play();
	video.loop = true;
	video.controls = false;
});
video.addEventListener('mouseout', () => {
	video.pause();
	video.controls = true;
});

let videos = document.querySelectorAll('.video-small > video');
videos.forEach((element) => {
	element.addEventListener('click', (e) => {
		let on = e.target.innerHTML;
		document.getElementById('videomain').innerHTML = `${on}`;
		document.getElementById('videomain').load();
		document.getElementById('videomain').play();
	});
});

let btn = document.querySelector('.btn');
let login = document.querySelector('#login');
login.addEventListener('click', (e) => {
	if(e.target.innerText === "Login") {
		e.target.innerText = "Logout"
	}else{
		e.target.innerText = "Login"
	}
})
btn.addEventListener('click', (e) => {
	let input = document.querySelector('.search');
	switch (input.value) {
		case "1":
			document.getElementById('videomain').innerHTML = `<source src="videoon/pexels-yaroslav-shuraev-9631974 (2160p).mp4"></source>`;
			document.getElementById('videomain').load();
			document.getElementById('videomain').play();
			break;
		case "2" : 
			document.getElementById('videomain').innerHTML = `<source src="videoon/pexels_videos_1860079 (1440p).mp4"></source>`;
			document.getElementById('videomain').load();
			document.getElementById('videomain').play();
			break;
		case "3" :
			document.getElementById('videomain').innerHTML = `<source src="videoon/pexels_videos_2053100 (2160p).mp4"></source>`
			document.getElementById('videomain').load();
			document.getElementById('videomain').play();
			break;
		case "4" :
			document.getElementById('videomain').innerHTML =  `<source src="videoon/pexels_videos_2826858 (2160p).mp4"></source>`
			document.getElementById('videomain').load();
			document.getElementById('videomain').play();
			break;
		case "5" :
			document.getElementById('videomain').innerHTML = `<source src="videoon/pexels-anthony-shkraba-8064146 (1440p).mp4"></source>`
			document.getElementById('videomain').load();
			document.getElementById('videomain').play();
			break;
		case "6" :
			document.getElementById('videomain').innerHTML = `<source src="videoon/production_id_5097127 (2160p).mp4"></source>`
			document.getElementById('videomain').load();
			document.getElementById('videomain').play();
			break;
	}
	input.value = "";
});
