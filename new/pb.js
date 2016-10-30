$(function() {
	$('.progressbar').each(function(){
		var t = $(this);
		var total = t.css('width')
		console.debug(total)
		t.find('.bar').animate({width:(total)}, 2500);
		t.find('.label').append('<div class="perc"></div>');
		t.find('.pbefore').css('width', total)

		function perc() {
			var total = parseInt(t.css('width'))/100;
			var length = t.find('.bar').css('width'),
				perc = Math.round(parseInt(length)/total),
				labelpos = (parseInt(length)-2);
			t.find('.label').css('left', labelpos);
			t.find('.perc').text(perc+'%');
		}
		perc();
		setInterval(perc, 0);
	});
});
