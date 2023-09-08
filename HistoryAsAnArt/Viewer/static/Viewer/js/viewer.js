// Cards functionality
cards = document.querySelectorAll(".card")



cards.forEach( card => {
	card.addEventListener('click', function (){
		this.querySelector(".content").classList.toggle("toFlip")
	})
})

// Content tree functionality
let content = document.getElementsByClassName("content_tree__toggler_header");


function ClickOnHeader(){
	this.nextElementSibling.classList.toggle('active') 
	var firstImg = this.firstElementChild
	firstImg.classList.toggle('active')
	firstImg.nextElementSibling.classList.toggle('active')
	firstImg.nextElementSibling.nextElementSibling.classList.toggle('active')
}


for (var i = 0; i < content.length; i++){
	content[i].addEventListener('click' , ClickOnHeader )
}


// Likes counter and Share counter functionality
function OnLike(){
	$.ajax({
		type: "GET",
		// What kind of addres our server expectin for (gonna handle sended data)
		url: "like/",
		mode: 'same-origin', // Do not send CSRF token to another domain.
		success: function(result) {
			$("#popup_likes--counter").text(result.likes)	
		},
	});

}


function OnShare(){
	$.ajax({
		type: "GET",
		// What kind of addres our server expectin for (gonna handle sended data)
		url: "share/",
		mode: 'same-origin', // Do not send CSRF token to another domain.
		success: function(result) {
			$("#popup_shared--counter").text(result.shares)	
		},
	});
}

// Increase likes
$(document).ready(function(){
	$("#popup_likes").on('click', OnLike)
})
// Increase shares
$(document).ready(function(){
	$("#popup_shared--twitter").on('click', OnShare)
	$("#popup_shared--vk").on('click', OnShare)
	$("#popup_shared--reddit").on('click', OnShare)
	$("#popup_shared--telegram").on('click', OnShare)
})

// Button that close and open popup_statistics
let isPopupStatisticsCollapsed = true
let collapsePopupStatistics = document.getElementById('popup_interaction__collapse_button')

function CollapsePopupStatistics() {
    isPopupStatisticsCollapsed = true
    collapsePopupStatistics.classList.remove('navigation_footer__collapse_button--flip')
	document.getElementById("popup_interaction--request").classList.toggle('popup_active')
	document.getElementById("navigation_footer__statistics").classList.toggle('active_button')
}

function RisePopupStatistics() {
    isPopupStatisticsCollapsed = false
    collapsePopupStatistics.classList.add('navigation_footer__collapse_button--flip')
	document.getElementById("popup_interaction--request").classList.toggle('popup_active')
	document.getElementById("navigation_footer__statistics").classList.toggle('active_button')
}

// collapseAll button also need to hide popupStatistics
collapseAll.addEventListener('click', e =>{
	console.log('collapseAll')
	document.getElementById("popup_interaction--request").classList.remove('popup_active')
	document.getElementById("navigation_footer__statistics").classList.remove('active_button')
})

collapsePopupStatistics.addEventListener('click', e => {
    isPopupStatisticsCollapsed ? RisePopupStatistics() : CollapsePopupStatistics()
})
