var ultimoScroll;
var dialogPosition = $('#seu_dialog').offset().top;
var dialogHeight = $('#seu_dialog').outerHeight();
$(window).on('scroll', function () {
    var scroll = $(this).scrollTop();
    if (scroll > dialogPosition + dialogHeight.outerHeight() || scroll < dialogPosition) $(window).scrollTop(ultimoScroll);
    else ultimoScroll = scroll;
});