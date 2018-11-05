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
});
$(window).on('resize', function () {
    h = window.innerHeight;
    if (window.innerWidth > 768) {
        overflowContainer('.overflowContainer', '.otherOneOverflow');
    } else if (window.innerWidth < 768) {
        $('.overflowContainer').css('max-height', 'none')
    }
});