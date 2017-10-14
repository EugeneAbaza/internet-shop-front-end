jQuery(function($) {
		$(window).scroll(function(){
			if($(this).scrollTop()>140){
				$('#navigation').addClass('fixed');
			}
			else if ($(this).scrollTop()<140){
				$('#navigation').removeClass('fixed');
			}
		});
	});
