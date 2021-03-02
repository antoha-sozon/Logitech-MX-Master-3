$(document).ready(function(){
    const menuButton = $('.menu__button');
    const menuList = $('.menu__list');
    const headerLogo = $('.header__logo');
    const heroArrow = $('.hero__arrow');

    menuButton.on('click', function () {
        $(this).toggleClass('active');
        $(menuList).toggleClass('active');
        $(headerLogo).toggleClass('active');
    })

    $(heroArrow).on("click", function () {
        const btTop = $('.bluetooth').offset().top;
        $('body,html').animate({scrollTop: btTop}, 1000);
    });
});