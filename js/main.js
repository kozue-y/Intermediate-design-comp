$(".fv_slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2500,
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
// ハンバーガーメニュー開け閉じ
$("#hamburger-block").click(function() {
    $("#js-drawer").toggle(300);
    $(".hamburger").toggleClass("active");
});


// モーダル
$(function () {
  $(".modal-open").on("click", function (e) {
    e.preventDefault();

// bodyスクロール禁止
    const target = $(this).data("modal");
    $("body").addClass("modal-open");

    const $modal = $("#" + target);
    $modal.css("display", "flex").hide().fadeIn(200);
  });

// 閉じる処理
  $(".modal-close, .modal-bg").on("click", function (e) {
    if ($(e.target).is(".modal-bg") || $(this).is(".modal-close")) {
      $("body").removeClass("modal-open");
      $(this).closest(".modal").fadeOut(200);
    }
  });
});


// topへ戻るボタン動作
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#page-top").addClass("is-show");
  } else {
    $("#page-top").removeClass("is-show");
  }
});

$('#page-top a').on('click', function() {
  $('html, body').animate({ scrollTop: 0 }, 500);
  return false;
});
  // AOSふわっと
  AOS.init({
    duration: 1000,
    delay: 100,
    easing: 'ease-out',
    once: true,
  });
