let togglers = document.getElementsByClassName("collapsing_tree__toggler_header");
let pathList = []

function ClickOnToggler(){
	var parent_name = "Статьи"
	catid = $(this).attr("data-catid");
	// I found out this solution more easy to implement. Essentially we just looking for parent with the same attribute
	parent_name = $("#collapsing_tree__toggler_header_"+catid).parent().parent().prev().attr("data-catname")
	// Firs entry of this var. gonna always be undefined because it is a root of tree 
	if (parent_name == undefined)
		parent_name = "Статьи"
	$.ajax({
		type: "POST",
		// What kind of addres our server expectin for (gonna handle sended data)
		url: "navigation/",
		// Data to send on server
		// I need pass to server parent name because I need to hide one of field (ManyToMany django DB relation)
		data: {"category_id":catid, "parent":parent_name},
		// For activating feature of django csrf-tokent protection
		headers: {'X-CSRFToken': csrftoken},
		mode: 'same-origin', // Do not send CSRF token to another domain.
		success: function(result) {
			// Get the body of toggler
			var body = $('#collapsing_tree__toggler_body_'+catid);
			// Insert 'answer' from server into site code
			body.html(result)
			// Set body of toggler visible 
			body.toggleClass('active')
			// Update all available elements for interacting
			togglers = document.querySelectorAll(".collapsing_tree__toggler_header");
			$(".collapsing_tree__toggler_header").off("click")
			$(".collapsing_tree__toggler_header").one("click",ClickOnToggler)
		}
	});
}

function SwitchImage(){

}

$(document).ready(function(){
	$(".collapsing_tree__toggler_header").one("click",ClickOnToggler);
});

