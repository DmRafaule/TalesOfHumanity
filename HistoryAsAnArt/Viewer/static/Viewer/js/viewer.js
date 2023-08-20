cards = document.querySelectorAll(".card")



cards.forEach( card => {
	card.addEventListener('click', function (){
		this.querySelector(".content").classList.toggle("toFlip")
	})
})

let content = document.getElementsByClassName("content_tree__toggler_header");


function ClickOnHeader(){
	this.nextElementSibling.classList.toggle('active') 
}


for (var i = 0; i < content.length; i++){
	content[i].addEventListener('click' , ClickOnHeader )
}
