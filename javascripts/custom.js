var h = window.innerHeight;
var w = window.innerWidth;
var resizeTimer;
var navbar = $('.navbar').outerHeight();
var overflowContainer = function (overflowSelector, differenceSelector) {
    return $(overflowSelector).css("max-height", (h - $(differenceSelector).outerHeight() - navbar));
}

$(document).ready(function () {
    if (window.innerWidth > 768) {
        overflowContainer('.overflowContainer', '.otherOneOverflow');
    } else {
        $('.overflowContainer').css('max-height', 'none')
    }

    $(document).on('click', '.sezione', function () {
        $(this).find('.fas').toggleClass('fa-chevron-down fa-chevron-up')
        //Hide the other panels
        //$(".accordion-content").not($(this).next()).slideUp('fast');

    })

    $(".brief-scheda .info, .delega").on('click', function () {
        if (window.innerWidth < 1200) {
            console.log(w);
            $(".col-lista").toggleClass('d-none');
            $(".col-scheda").toggleClass('col-full');
            $(".reopen-list").toggleClass('d-none');
        }
    })

    $("#reopen-list").on('click', function () {
        console.log("REOPEN!!!!!!!!!!!!!!");
            $(".col-lista").toggleClass('d-none');
            $(".col-scheda").toggleClass('col-full');
            $(".reopen-list").toggleClass('d-none');
    })
});

$('.stacktable').stacktable();

$(window).on('resize', function (e) {
    h = window.innerHeight;
    w = window.innerWidth;
    if (window.innerWidth > 768) {
        overflowContainer('.overflowContainer', '.otherOneOverflow');
    } else if (window.innerWidth < 768) {
        $('.overflowContainer').css('max-height', 'none')
    }

    $(".brief-scheda .info, .delega").on('click', function () {
        if (w < 1200) {
            $(".col-lista").toggleClass('d-none');
            $(".col-scheda").toggleClass('col-full');
            $(".reopen-list").toggleClass('d-none');
        }
    })

    $("#reopen-list").on('click', function () {
        console.log("REOPEN!!!!!!!!!!!!!!");
            $(".col-lista").toggleClass('d-none');
            $(".col-scheda").toggleClass('col-full');
            $(".reopen-list").toggleClass('d-none');
    })
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {

        console.log("STOP RESIZE!!!!!!!!!!!!!!!!!");

    }, 250);
});


