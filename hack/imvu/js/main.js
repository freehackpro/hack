/*!
 * Main.js - Hearth of Application
 * Copyright 2013-2017 CPACodex.com, Inc.
 * Licensed under the MIT license
 */
$( document ).ready( function() {  


    setInterval( newActivity, 2000 );

    function newActivity() {

        var flags   = [ 'ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
                        'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'];
        var users   = [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];
        var avatars = [ 'https://i.imgur.com/ETGM5Es.jpg',
                        'https://i.imgur.com/KVkUVdf.jpg',
                        'https://i.imgur.com/Buq9pSf.jpg',
                        'https://i.imgur.com/Z5Uu2S1.jpg',
                        'https://i.imgur.com/XACQU4P.jpg',
                        'https://i.imgur.com/1Zx1lqx.jpg',
                        'https://i.imgur.com/3Z82Des.jpg',
                        'https://i.imgur.com/dgPeQCs.jpg',
                        'https://i.imgur.com/3GOUPYY.jpg'];

        var flag         = flags[ Math.floor( Math.random() * flags.length ) ];
        var avatar       = avatars[ Math.floor( Math.random() * avatars.length ) ];
        var user         = users[ Math.floor( Math.random() * users.length ) ];
        var vBucksRand     = Math.floor( ( Math.random() * 10000 ) + 15000 );;

        $( '.live-stats' ).last().remove();

        $( '.activityContent' ).hide().prepend('<div class="live-stats">' +
            '<div class="avatar"><img src="'+avatar+'" alt="" /></div>' +
            '<div class="flag"><img src="img/flags/'+flag+'.png" alt="" /></div>' +
           '<div class="info">' +
              '<ul>' +
                 '<li><b>'+user+',</b> generated now:</li>' +
                 '<li><img class="item-gen" src="img/codpoints.png" alt="" />Coins: <span class="bucks-color">' + vBucksRand + '</span> </li>' +
              '</ul>' +
           '</div>' +
        '</div>').fadeIn();
    }

    /* vBucks */
    var $gen_vBucks = $( '.vBucks-input' );
        $gen_vBucks.updown ({

        	step: 10000,
            min: 10000,
            max: 100000,

        });

    var $updown_vBucks = $gen_vBucks.data( 'updown');
        $( '.plus-vBucks' ).click( function( event ) {

            $updown_vBucks.increase( event );
            $updown_vBucks.triggerEvents();

        });
        $( '.minus-vBucks' ).click( function( event ) {

            $updown_vBucks.decrease( event );
            $updown_vBucks.triggerEvents();

        }); 


    function progressBar() {

        var width            = 1;
        var intervalProgress = setInterval( frame, 0200 );

        goToByScroll( 'generatorJS' );

        function frame() {

            if( width == 20 ) $( '.load-textJS' ).html( 'Connecting' );
            if( width == 30 ) $( '.load-textJS' ).html( 'Fetching data' );
            if( width == 40 ) $( '.load-textJS' ).html( 'GET = Variables' );
            if( width == 50 ) $( '.load-textJS' ).html( 'GET -> Username' );
            if( width == 60 ) $( '.load-textJS' ).html( 'GET -> IP Address' );
            if( width == 70 ) $( '.load-textJS' ).html( 'GET -> Coins' );
            if( width == 80 ) $( '.load-textJS' ).html( 'POST => DATA' );

            if ( width >= 100 ) {

                clearInterval( intervalProgress );
                $( '.generator-step2' ).slideUp();
                $( '.generator-step3' ).slideDown();

                $( '.userJS' ).html( $( '.username-input' ).val() );

                            $('.vBucksJS').countTo({

                                from: 10,
                                to: $( '.vBucks-input' ).val(),
                                speed: 1000,
                                refreshInterval: 1,
                                onComplete: function ( value) {

                                    $( '.vBucksJSthick' ).css('opacity', '1');

                                        setTimeout( function() { 

                                            $( '.generator-step3' ).fadeOut( function() {

                                                $( '.generator-offers' ).fadeIn();

                                            });
                                            
                                        }, 2000);                                

                                }

                              

                        
                  });               

            } else {

                width++; 
                $( ".progress-bar" ).css( "width", width + '%' );
                $( ".progress-bar" ).html( width * 1 + '%' );

            }

        }

    }   
    
    /* Generator Starts Here */

    $( ".btnGenerator" ).click( function() {

    	var $player_name = $( '.username-input' ).val();

    	if( $player_name == "" || $player_name.replace(/ /g,'').length < 2 ) {

    		$( ".username-input" ).css( { border: '1px solid #F00' } );

    	} else {

    		$( ".username-input" ).css( { border: '1px solid #111319' } );	// Change border to default

    		$( '.generator' ).slideUp( function() {

    			$( '.generator-step2' ).slideDown();
                progressBar();

    		});

    	}

    });
    // .btngenerator end

    /* Button to scroll to Generator */

    $( '.btn-GoGenerator' ).click( function() {

        goToByScroll( 'generator' );

    });
});
