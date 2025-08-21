$(".fv_slider").slick({
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false
});

// ヘッダー固定＆色変更
$(function() {
    const $header = $("#header");
    const aboutTop = $("#about").offset().top;

    $(window).on("scroll", function() {
        const scroll = $(window).scrollTop();

        if (scroll >= aboutTop) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    });
});