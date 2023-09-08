cards = document.querySelectorAll(".card")



cards.forEach( card => {
	card.addEventListener('click', function (){
		this.querySelector(".content").classList.toggle("toFlip")
	})
})

function ChangeDots(){
	if (isMobile){
		document.querySelectorAll(".circle_container").forEach( circle => {
			circle.style.flexDirection = 'row'
			circle.querySelectorAll(".circle").forEach( inner_circle =>{
				inner_circle.style.marginRight = '15px'
				inner_circle.style.marginLeft = '15px'
			})
		})
	}
	else{
		document.querySelectorAll(".circle_container").forEach( circle => {
			circle.style.flexDirection = 'column'
			circle.querySelectorAll(".circle").forEach( inner_circle =>{
				inner_circle.style.marginTop = '15px'
				inner_circle.style.marginBottom = '15px'
			})
		})
	}
}

window.addEventListener('load', ChangeDots );
window.addEventListener('resize', ChangeDots );
