const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",

	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	
	{
		image:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>",
	}

];

// déclaration des variables
let btnPrecedent = null;
let numero = 0;

//demarrage du script
window.onload = function()
{
	console.log("demarrage");

	btnPrecedent = document.getElementById("precedent");
	btnPrecedent.addEventListener
	(
		"click", 
		function()
		{
			ChangeSlide(-1);
		}
	);

	btnPrecedent = document.getElementById("suivant");
	btnPrecedent.addEventListener
	(
		"click", 
		function()
		{
			ChangeSlide(1);
		}
	);

};



// fonction executé lorsqu'on clique sur une flèche carousel
function ChangeSlide(sens) 

{
	numero = numero + sens;

	if (numero > 3)
		numero = 0;
	if (numero < 0)
		numero = 3;

	console.log("numero : " + numero)
	document.getElementById("slide").src = slides[numero].image;
	document.getElementById("banner-text").innerHTML = slides[numero].tagLine;

	const points = document.querySelectorAll(".dot");
	// console.log("nb points = " + points.length);
	// console.log("point 0 = " + points[0].style.backgroundColor);
	// points[0].style.backgroundColor = "blue";
	for(let index = 0; index < 4; index++)
	{
		points[index].classList.remove("dot_selected");
		if(index == numero)
			points[index].classList.add("dot_selected");
	}


}


