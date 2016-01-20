$(document).ready(function() { // $ is the JQuery Selector when the document finished loading (is ready)
	$("#menuButton").click(showMenu);
	$("#fadeButton").click(fadeTime(10)); // This calls instead of references the function so we want to get (10) in there later
	$("#menu").hide();
});

function showMenu() {
	$("#menu").toggle('slow/400/fast', function() {
		$("#menu").animate({opacity: .75});
	});
}

function fadeTime(times) {
	for (i = 0; i < times; i++){
	$('p').fadeOut(300);
	$('p').fadeIn(300);
	}
}