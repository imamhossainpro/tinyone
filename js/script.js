$(document).ready(function() {
	$('.di').click('slow', function() {
		$('.new').hide('slow', function() {
			alert("this is nothing");
		});
	});
});