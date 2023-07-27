cards = document.querySelectorAll(".card")



cards.forEach( card => {
	card.addEventListener('click', function (){
		this.querySelector(".content").classList.toggle("toFlip")
	})
})
