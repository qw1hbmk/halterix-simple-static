$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
	emailError();
  emailButtonHover();
  focusUnderlineAdd();
  focusUnderlineRemove();
});

// Handle focus underline animation

function focusUnderlineAdd(){
	$('.email-input').focus(function(event){
		$(event.target).siblings().css({
			background: '#00a9a9',
			transition: 'width 0.5s linear',
			width: '100%'
		});
	});
}

function focusUnderlineRemove(){
	$('.email-input').blur(function(event){
		$(event.target).siblings().css({
			background: '#00a9a9',
			transition: 'width 0.5s linear',
			width: '0'
		});
	});
}

// Handle email error

function emailError(){
	var error;

	$('.email-button').click(function(){
		error = false;

		if(!$('.email input').val().match(/\S+@\S+\.\S+/i)){
			$('.email input').siblings().css({
				background: '#a90000',
				transition: 'width 0.5s linear',
				width: '100%'
			});

			error = true;
		}

		if(!$('.message textarea').val().match(/\S/i)){
			$('.message textarea').siblings().css({
				background: '#a90000',
				transition: 'width 0.5s linear',
				width: '100%'
			});

			error = true;
		}

		sendEmail(error);
	});
}

function sendEmail(err){
	if(!err){
		$.ajax({
			url: 'http://tebaibrahim.com/test/email.php',
			type: 'POST',
			data: {
				email: $('.email input').val(),
				name: $('.name input').val(),
				subject: $('.subject input').val(),
				message: $('.message textarea').val()
			},
			success: function(msg){
				successEmail();
			}
		});
	}
}

function successEmail(){
	$('.contact input').val('');
	$('.contact textarea').val('');

	$('.email-button').css({
		transition: 'opacity 1s linear',
		'pointer-events': 'none',
		opacity: '0'
	});

	$('.sent-button').css({
		transition: 'opacity 1s linear',
		opacity: '1'
	});

	setTimeout(function(){
		$('.email-button').css({
			transition: 'opacity 1s linear',
			'pointer-events': 'auto',
			opacity: '1'
		});

		$('.sent-button').css({
			transition: 'opacity 1s linear',
			opacity: '0'
		});
	},3000);
}

// Email button hover effect

function emailButtonHover(){
	$('.email-button').hover(function(){
		$('.contact .divider-bg').css({
			transition: 'border-color 1s linear',
			'border-color': '#00a9a9'
		});
	}, function(){
		$('.contact .divider-bg').css({
			transition: 'border-color 1s linear',
			'border-color': '#333'
		});
	});
}