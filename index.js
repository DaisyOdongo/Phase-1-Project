const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '154ee5feeemsh33e5b578ed40855p11c0e3jsnf5594c7277d0',
		'X-RapidAPI-Host': 'groceries2.p.rapidapi.com'
	},
	
};

fetch('https://groceries2.p.rapidapi.com/api/v1/groceries', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}