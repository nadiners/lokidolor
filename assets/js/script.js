$(document).ready(function(){

	$('ul.categories li').click(function(){

		if( $(this).hasClass("clicked") ){
			
			$(this).removeClass("clicked")
			$('ul.links li').removeClass("inactive")

		} else {

			var category = $(this).data('id');

			console.log($);

			$('ul.links li').removeClass("active").addClass("inactive");
			$('[data-id*='+category+']').removeClass("inactive").addClass("active");
			$('ul.categories li').removeClass("clicked");
			$(this).addClass("clicked");

		}

	});

});

