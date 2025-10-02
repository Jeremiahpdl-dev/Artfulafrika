//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "11 October 2048 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	