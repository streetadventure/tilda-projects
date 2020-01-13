function onStyleSelect(styleValue, hdnElementId, styleElementId) {
    $('#' + hdnElementId).val(styleValue);
    $('#' + styleElementId).find('img').addClass("sactive");
    $('#' + styleElementId).siblings().find('img').removeClass("sactive");

}
function onOtherStyleSelect(cb, styleElement) {
    if ($('#' + cb).is(":checked")) {
        $('#' + styleElement).val($('#' + cb).attr("data-display-name"));
    }
    else {
        $('#' + styleElement).val("");
    }
}

function validateEmail(txtEmail) {
    var a = txtEmail;
    if (a == "") {
        return false;
    }
    var filter = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{0,4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function($) {

    $('ul.size_tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    $('.MainTabSelection').click(function() {
        $('.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');
        $('#MainTab2').addClass('current');
        $("#tab-2").addClass('current');

    });    
    
    $(".customDesktop").click(function() {
        var datastyletype = $(this).data("style-type");
        if (datastyletype == "BodyLength") {
            $('.csImgBody img').hide().attr('src', $(this).attr('data-style-src')).fadeIn('1000000');
            setTimeout(function() {
                $('.csImgBodyB img').attr('src', $('.csImgBody img').attr('src'));
            }, 1000);
            $('#hdnSelectedNeckline').val($('#hdnNecklines').val());
        }
        if (datastyletype == "Karman") {
            $('.csImgKarman img').hide().attr('src', $(this).attr('data-style-src')).fadeIn('slow');
            setTimeout(function() {
                $('.csImgKarmanB img').attr('src', $('.csImgKarman img').attr('src'));
            }, 1000);
            /*$('.csImgright img').hide().attr('src', $(this).attr('data-style-src').replace("_L", "_R")).fadeIn('slow');
            setTimeout(function() {
                $('.csImgrightB img').attr('src', $('.csImgright img').attr('src'));
            }, 1000);*/
            $('#hdnSelectedSleevetype').val($('#hdnSleeveTypes').val());
        }
        if (datastyletype == "Mangeta") {
            $('.csImgMangeta img').hide().attr('src', $(this).attr('data-style-src')).fadeIn('slow');
            setTimeout(function() {
                $('.csImgMangetaB img').attr('src', $('.csImgMangeta img').attr('src'));
            }, 1000);
            $('#hdnSelectedTunicLengths').val($('#hdnTunicLengths').val());
        }
        if (datastyletype == "Vorotnik") {
            $('.csImgVorotnik img').hide().attr('src', $(this).attr('data-style-src')).fadeIn('slow');
            setTimeout(function() {
                $('.csImgVorotnikB img').attr('src', $('.csImgVorotnik img').attr('src'));
            }, 1000);
            $('#hdnSelectedPantLengths').val($('#hdnPantLengths').val());
        }

    });

    $(".CustomSelectcss").click(function () {
        var cssId = $(this).attr('data-styletype');
        var text = $(this).attr('data-style')
        var img = $(this).attr('data-img')
        if (cssId == "BodyLength") {
            $('.csImgBody img').hide().attr('src', img).fadeIn('slow'); setTimeout(function () { $('.csImgBodyB img').attr('src', $('.csImgBody img').attr('src')); }, 1000);
            $('#hdnBodyLength').val(text);
            $("#mob_" + text + " img").addClass("active");
            $("#mob_" + text).siblings().find('img').removeClass("active");
        }
        if (cssId == "Karman") {
            $('.csImgKarman img').hide().attr('src', img).fadeIn('slow'); setTimeout(function () { $('.csImgKarmanB img').attr('src', $('.csImgKarman img').attr('src')); }, 1000);
            $('#hdnKarman').val(text);
            $("#mob_" + text + " img").addClass("active");
            $("#mob_" + text).siblings().find('img').removeClass("active");
        }
        if (cssId == "Mangeta") {
            $('.csImgMangeta img').hide().attr('src', img).fadeIn('slow'); setTimeout(function () { $('.csImgMangetaB img').attr('src', $('.csImgMangeta img').attr('src')); }, 1000);
            $('#hdnMangeta').val(text);
            $("#mob_" + text + " img").addClass("active");
            $("#mob_" + text).siblings().find('img').removeClass("active");
        }
        if (cssId == "Vorotnik") {
            $('.csImgVorotnik img').hide().attr('src', img).fadeIn('slow'); setTimeout(function () { $('.csImgVorotnikB img').attr('src', $('.csImgVorotnik img').attr('src')); }, 1000);
            $('#hdnVorotnik').val(text);
            $("#mob_" + text + " img").addClass("active");
            $("#mob_" + text).siblings().find('img').removeClass("active");
        }
    });
    $(".CustomSelectcss a").click(function(e) {
        e.preventDefault();
    });

    $('.style_selection_mob').click(function () {
        var fx_tabs_id = $(this).attr('data-tab');
        $('ul.fx_style_selection_tabs li').removeClass('current');
        $('.fx_tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + fx_tabs_id).addClass('current');
    });
});