$(document).ready(function() {


	$('#blurred-resources').click(function() {
		sweetAlert("Error", "Please enter your Username and select your platform.", "error");
    });

	//Resource 1 Progress Bar
	function progressBar(percent, $element) {
		var progressBarWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBar(20, $('#progressBar'));

	var select = $( "#resource-item-1-amount-wrapper" );
	var slider = $( "<div id='slider-resource-1'></div>" ).insertAfter( select ).slider({
		min: 200000,
		max: 1000000,
		value: 200000,
		range: "min",
		change: function(event, ui) {
			var sliderValue = $( "#slider-resource-1" ).slider( "option", "value" );
			$('#resource-1-amount').html(sliderValue);
			if(sliderValue == '200000') {
				progressBar(20, $('#progressBar'));
				$('#decrease-resource-1').addClass('btn-disabled');
			}
			else if (sliderValue == '400000') {
				progressBar(40, $('#progressBar'));
				$('#decrease-resource-1').removeClass('btn-disabled');
			}
			else if (sliderValue == '600000') {
				progressBar(60, $('#progressBar'));
			}
			else if (sliderValue == '800000') {
				progressBar(80, $('#progressBar'));
				$('#increase-resource-1').removeClass('btn-disabled');
			}
			else if (sliderValue == '1000000') {
				progressBar(100, $('#progressBar'));
				$('#increase-resource-1').addClass('btn-disabled');
			}
		}
	});

	$('#increase-resource-1').click(function() {
		var sliderCurrentValue = $( "#slider-resource-1" ).slider( "option", "value" );
		slider.slider( "value", sliderCurrentValue + 200000 );
	});
	$('#decrease-resource-1').click(function() {
		var sliderCurrentValue = $( "#slider-resource-1" ).slider( "option", "value" );
		slider.slider( "value", sliderCurrentValue - 200000 );
	});

	//Resource 2 Progress Bar
	function progressBarResource2(percent, $element) {
		var progressBarResource2Width = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarResource2Width }, 500).html(percent + "%&nbsp;");
	}
	progressBarResource2(20, $('#progressBarResource2'));
	var selectResource2 = $( "#resource-item-2-amount-wrapper" );
	var sliderResource2 = $( "<div id='slider-resource-2'></div>" ).insertAfter( selectResource2 ).slider({
		min: 100000,
		max: 500000,
		value: 100000,
		range: "min",
		change: function(event, ui) {
				var sliderValueResource2 = $( "#slider-resource-2" ).slider( "option", "value" );
				$('#resource-2-amount').html(sliderValueResource2);
					if(sliderValueResource2 == '100000') {
						progressBarResource2(20, $('#progressBarResource2'));
						$('#decrease-resource-2').addClass('btn-disabled');
					}
					else if (sliderValueResource2 == '200000') {
						progressBarResource2(40, $('#progressBarResource2'));
						$('#decrease-resource-2').removeClass('btn-disabled');
					}
					else if (sliderValueResource2 == '300000') {
						progressBarResource2(60, $('#progressBarResource2'));
					}
					else if (sliderValueResource2 == '400000') {
						progressBarResource2(80, $('#progressBarResource2'));
						$('#increase-resource-2').removeClass('btn-disabled');
					}
					else if (sliderValueResource2 == '500000') {
						progressBarResource2(100, $('#progressBarResource2'));
						$('#increase-resource-2').addClass('btn-disabled');
					}
				}
	});
	$('#increase-resource-2').click(function() {
		var sliderCurrentResource2Value = $( "#slider-resource-2" ).slider( "option", "value" );
		sliderResource2.slider( "value", sliderCurrentResource2Value + 100000 );
	});
	$('#decrease-resource-2').click(function() {
		var sliderCurrentResource2Value = $( "#slider-resource-2" ).slider( "option", "value" );
		sliderResource2.slider( "value", sliderCurrentResource2Value - 100000 );
	});

	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarConsole(1, $('#progressBarConsole'));

	$('#connect-button').click(function () {
		if($('#coc-player-tag').val().length > 2){
			$.magnificPopup.open({
				items: {
					src: '#message-wrapper',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				mainClass: 'mfp-fade'
			});
			$('.message-header h3').html("Account connecting...");
			$('.message-header p.message-header-subtitle').html("Please wait for account connection");
			$(".message-content p.console-message").fadeIn();
			var $console_message_username_msg = $('#coc-player-tag').val();
			var $console_message_platform_msg = $('#coc-player-platform').val();
			setTimeout(function() {
				$(".console-loadbar").fadeIn();
				$(".message-content p.console-message").typed({
					strings: ["Connecting with user account... <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> on <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span>"],
					showCursor: false,
					typeSpeed: -50,
					onStringTyped: function() {
						progressBar(20, $('#progressBarConsole'));
					}
				});
			}, 500 );
			setTimeout(function() {
					$(".message-content p.console-message").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass('bounce animated');
				});
			}, 3500 );
			setTimeout(function() {
				$(".message-content p.console-message").typed({
					strings: ["Connected <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
					showCursor: false,
					typeSpeed: -50,
					onStringTyped: function() {
						progressBar(100, $('#progressBarConsole'));
						setTimeout(function() {
							$('#resources-select-wrapper').removeClass('resources-select-wrapper-blurred');
							$('#account-information-wrapper').addClass('account-wrapper-blurred');
							$('#blurred-account').fadeIn();
							$('#blurred-resources').remove();
							$.magnificPopup.close();
							$(".message-content p.console-message").hide();
							progressBar(0, $('#progressBarConsole'));
							progressBar(20, $('#progressBar'));
							progressBarResource2(20, $('#progressBarResource2'));
							$('html, body').animate({
								scrollTop: $("#resources-select-wrapper").offset().top
							}, 2000);
						}, 1500 );
					}
				});
			}, 4800 );
		}
		else {
			sweetAlert("Error", "Write correctly username", "error");
		}
	});

	$('#second-step-button').click(function() {
		$(".message-content p.console-message").hide();
		$.magnificPopup.open({
			items: {
				src: '#message-wrapper',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			mainClass: 'mfp-fade'
		});
		progressBar(0, $('#progressBarConsole'));
		$('.message-header h3').html("My Cafe: Recipes & Stories HACK");
		$('.message-header p.message-header-subtitle').html("The generator will generate diamonds and money soon");
		$(".message-content p.console-message").fadeIn();
		var $console_message_username_msg = $('#coc-player-tag').val();
		var $console_message_platform_msg = $('#coc-player-platform').val();
		var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
		var $console_message_resource2_msg = $('#slider-resource-2').slider("option", "value");
		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Processing..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(5, $('#progressBarConsole'));
				}
			});
		}, 200 );
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Preparation of files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(15, $('#progressBarConsole'));
				}
			});
		}, 1700 );
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Encryption..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(25, $('#progressBarConsole'));
				}
			});
		}, 2700 );
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Creating data packages..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(32, $('#progressBarConsole'));
				}
			});
		}, 3800 );
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Transfer of data packages..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(40, $('#progressBarConsole'));
				}
			});
		}, 5500 );
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Transfer of data packages..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(43, $('#progressBarConsole'));
				}
			});
		}, 7800 );
		setTimeout(function() {
			setTimeout(function() {
				$('.console-resourceitem1-wrapper').fadeIn(500, function() {
					var $console_resource1_countto = $('#slider-resource-1').slider("option", "value");
					$('#console-resourceitem1-value').countTo({
						from: 0,
						to: $console_resource1_countto,
						speed: 1500,
						refreshInterval: 10,
						formatter: function (value, options) {
						  return value.toFixed(options.decimals);
						}
					});
				});
			}, 500 );
			$(".message-content p.console-message").typed({
				strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> diamonds for <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(50, $('#progressBarConsole'));
				}
			});
		}, 10500 );
		setTimeout(function() {
			$(".console-resourceitem1-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('bounce animated');
			});
			$(".message-content p.console-message").typed({
				strings: ["<span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> diamonds added successfully"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(65, $('#progressBarConsole'));
				}
			});
		}, 14000 );
		setTimeout(function() {
			setTimeout(function() {
				$('.console-resourceitem1-wrapper').hide();
				$('.console-resourceitem2-wrapper').fadeIn(500, function() {
					var $console_resource2_countto = $('#slider-resource-2').slider("option", "value");
					$('#console-resourceitem2-value').countTo({
						from: 0,
						to: $console_resource2_countto,
						speed: 1500,
						refreshInterval: 10,
						formatter: function (value, options) {
						  return value.toFixed(options.decimals);
						}
					});
				});
			}, 500 );
			$(".message-content p.console-message").typed({
				strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> money for <span class='console-message-connected-item'>"  + $console_message_username_msg + "</span>"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(75, $('#progressBarConsole'));
				}
			});
		}, 16500 );
		setTimeout(function() {
			$(".console-resourceitem2-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('bounce animated');
			});
			$(".message-content p.console-message").typed({
				strings: ["<span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> money added successfully"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(85, $('#progressBarConsole'));
				}
			});
		}, 20500 );
		setTimeout(function() {
			$('.console-resourceitem2-wrapper').fadeOut();
			$(".message-content p.console-message").typed({
				strings: ["Mashing of traces..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(90, $('#progressBarConsole'));
				}
			});
		}, 22500 );
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Veryfication..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(93, $('#progressBarConsole'));
				}
			});
		}, 24500 );
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["<b class='highlighted'>Failed verification</b>..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(93, $('#progressBarConsole'));
				}
			});
		}, 26500 );
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Manual verification of use is needed..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(93, $('#progressBarConsole'));
				}
			});
		}, 28000 );
		setTimeout(function() {
			$(".message-content p.console-message").fadeOut(function(){
				$(".human-verification-wrapper").fadeIn();
			});
		}, 29500 );
	});


    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });

	$("#video-wrapper").fitVids();

});


var ee;
var eenum2 = 334;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 1000);
}
dis_num3();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "Coinsenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "blue creditsStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGblue creditsenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
var ChatContent = ["Nice","It works?","woiring for sure?","working for me","working on all platforms","Just added :D","Good :D","Only fast survey and works! <3","OMG!","LOL!","ROFL!","Jee","Juppii","easy","Hi","how use it?","I love this website!","hi","How much you generate Coins and Diaminds??","100% safe!","It's for free??","How long you waiting for add Values?","Yeah","nope","I know","Exactly it's very cool","uhm","Easy","Best site with generator!","Ban protect?","Yeees","Cool =)","<message deleted>","oh yeah","Shieet","Love it","I never thought it was that easy","I found it on YT, Nice","Don't spam","Who want to play with me?","I'm going to use once again it","i save a lot of money with this tool","Nice","I'm very happy that i found this website","ktoś widział Iron Mena?","Only working hack in the web","wow","Ile trzeba czekać ??","dostałem info od kolegi, że działa","Dzięki ktokolwiek to zrobił","już się nie mogę doczekać?","Jak narazie najlepszy generator ever","dostałem pokeballe?","good :D","no problems","każdy może to zrobić, mega łatwe","niesamowite","czekałem chwilę dłużej ale dostałem to co trzeba","spadam grać","brb","it's working :) check it","I do not regret, I took a chance","oh fuck its working","First real generator online","THX","after few seconds on my account :D","YEaaah","After verification you will get coins and diamonds ","Today i'm luckiest person in the world","best generator ever","Than you programmers","Woow","yep","Of course","I was added for my girlfriend"];
var ChatAntiBot = ["Fuck you I'm not a bot", "Does this sound like a bot to you noob?", "yeah we're all bots Kappa", "bot? i'm here for spamming this shit lol", "are you stupid or something? they have anti bot protection", "sure bot, 0101010110 lmao xD", "no, we're not bots Kappa"];


$(document).ready(function() {


    ChatStart();
    ChatLog("Welcome on chatroom, Don't spam because you will banned");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#livechatInputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#livechatButtonChat')['click']();
        };
    });
    $('#livechatButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#livechatContainerChatUserName')['fadeIn'](250);
            $('.livechatOverlaySmall').fadeIn(200);
        } else {
            $msg = $('#livechatInputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#livechatInputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  lol stop spamming and just use the generator');

                    setTimeout(function() {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  is this your first time here? this is like the only legit diamonds and money generator out there');
                        setTimeout(function() {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' he just wants all diamonds  and money for himself haha');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#livechatButtonChatUserName')['click'](function() {
        ChatUserName = $('#livechatInputChatUserName')['val']();
        $('#livechatContainerChatUserName')['fadeOut'](250, function() {
            $('.livechatOverlaySmall').fadeOut(200, function() {
                $('#livechatButtonChat')['click']();
            });
        });
    });


});

Date.prototype.getFullMinutes = function() {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function() {

    $('#livechatInputComment').focus(function() {
        $('#livechatContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function() {
        setTimeout(function() {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            ChatAddEntry(_0xaa63x9, _0xaa63xa);
            _0xaa63x8();
        }, Random(1000, 15000));
    };
    _0xaa63x8();
};
