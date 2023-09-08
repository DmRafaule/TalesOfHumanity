function OnSignup(){
	var data = new FormData();
	data.append("csrfmiddlewaretoken", csrftoken);
	data.append("name", $("#name").val())
	data.append("position", $("#position").val())
	data.append("email", $("#email").val())
	data.append("about", $("#about-user").val())
	$.ajax({
		type: "POST",
		// What kind of addres our server expectin for (gonna handle sended data)
		url: "send/",
		// Data to send on server
		// I need pass to server parent name because I need to hide one of field (ManyToMany django DB relation)
		data: data,
		// If we use FormData you have to specify them
		processData: false,
		contentType: false,
		// For activating feature of django csrf-tokent protection
		headers: {'X-CSRFToken': csrftoken},
		mode: 'same-origin', // Do not send CSRF token to another domain.
		success: function(result) {
			$(".common").css("color","green")
			$("#common-hint").text(result.common)	
			$("#name-hint").text(result.name)	
			$("#email-hint").text(result.email)	
			$("#position-hint").text(result.position)	
			$("#about-hint").text(result.about)	
			// Redirect to login page
			setTimeout(function(){
				window.location.href = '/'
			},3000)
		},
		error: function(jqXHR, textStatus, errorThrown){
			$(".form_el__hint").css("color","red")
			$("#common-hint").text(jqXHR.responseJSON.common)	
			$("#name-hint").text(jqXHR.responseJSON.name)	
			$("#email-hint").text(jqXHR.responseJSON.email)	
			$("#position-hint").text(jqXHR.responseJSON.position)	
			$("#about-hint").text(jqXHR.responseJSON.about)	
		}
	});

}




$(document).ready(function(){
	$("#send_button").on('click', OnSignup)
})
