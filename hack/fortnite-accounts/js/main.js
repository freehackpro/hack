$( document ).ready(function() {

    ion.sound({
        sounds: [
            {
                name: "button",
                path: "audio/",
                volume: 0.7
            },
            {
                name: "swoosh",
                path: "audio/",
                volume: 0.7
            },
            {
                name: "notification",
                path: "audio/",
                volume: 0.7
            }
        ],
        path: "audio/",
        preload: true,
        multiplay: true
        });

function progressBar() {
    
        $profile_name = $('#username').val();
        $(".verification-username").html($profile_name);
        $fans_val = $('#fans').val();
        $(".fans-value").html($fans_val);
        var width            = 1;
        var intervalProgress = setInterval( frame, 0300 );
        var fansval = document.getElementById("fans").value;
        var usernameval = document.getElementById("username").value;

        function frame() {
            
            if( width == 20 ) $( '.load-textJS' ).html( 'connecting on Fortnite Servers...' );
            if( width == 30 ) $( '.load-textJS' ).html( 'email is <strong>'+usernameval+'</strong>...' );
            if( width == 40 ) $( '.load-textJS' ).html( 'cracking Platform <strong>'+fansval+'</strong> <img src="img/plan-small.png"> ' );
            if( width == 55 ) $( '.load-textJS' ).html( 'Cracked!...');
            if( width == 70 ) $( '.load-textJS' ).html( 'adding...' );
            if( width == 80 ) $( '.load-textJS' ).html( 'Again Adding...' );
            if( width == 90 ) $( '.load-textJS' ).html( '<span style="color: red;">Small Survey Required!</span>' );

            if ( width >= 100 ) {
                $( '.generator-wrapper' ).addClass('zoomOutDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $.magnificPopup.open({
											items: {
												src: '.verification-wrapper',
											},
											type: 'inline',
											preloader: false,
											modal: true,
											callbacks: {
                                                beforeOpen: function() {
                                                    ion.sound.play("notification");
                                                },
												open: function() {							
												},
												beforeClose: function() {
													this.content.addClass('animated fadeOut');
												},
												close: function() {
													this.content.addClass('animated fadeOut');
												}
											}
										});		
            });
                
          

            } else {

                width++; 
                $( ".progress-bar" ).css( "width", width + '%' );
                $( ".progress-bar" ).html( width * 1 + '%' );

            }

        }

    }   

$('.buttonGen1').click( function() {
        ion.sound.play("button");
        $( '.head-wrapper' ).addClass('flipOutX animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                ion.sound.play("swoosh");
                $(this).addClass('hidden');	
                $('.main-wrapper').removeClass('hidden');
            });
    	});
$( '.buttonGen4' ).click( function() {
        ion.sound.play("button");
		call_locker();
		});
$('.buttonGen2').click( function() {
        ion.sound.play("button");
        var usernameval = document.getElementById("username").value;
    	var $player_name = $( '#username' ).val();
    	if( $player_name == "" || $player_name.replace(/ /g,'').length < 2 ) {

        Swal.fire({
            type: 'error',
            title: 'Username missing',
            text: 'Please enter your username!',
});
        
    	} else {
        $( '.main-wrapper' ).addClass('flipOutX animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                ion.sound.play("swoosh");
                $(this).addClass('hidden');	
                $('.selector-wrapper').removeClass('hidden');
            });
    	}
 });
    
$( '.buttonGen3' ).click( function() {
        ion.sound.play("button");
        $( '.selector-wrapper' ).addClass('flipOutX animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                ion.sound.play("swoosh");
                $(this).addClass('hidden');	
                $('.generator-wrapper').removeClass('hidden');
                progressBar();
            });
        });
});

