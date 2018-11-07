var h = window.innerHeight;
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



});
$(window).on('resize', function () {
    h = window.innerHeight;
    if (window.innerWidth > 768) {
        overflowContainer('.overflowContainer', '.otherOneOverflow');
    } else if (window.innerWidth < 768) {
        $('.overflowContainer').css('max-height', 'none')
    }
});
