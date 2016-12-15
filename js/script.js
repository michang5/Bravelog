$(function () {
	$('[href="#top"], [href="#sport-1"], [href="#sport-2"], [href="#sport-3"]').click(function () {
		if ($(this).attr('href') == '#') {} else {
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - 35
			}, 500);
			return false;
		}
	});
});