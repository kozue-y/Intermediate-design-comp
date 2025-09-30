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
// ハンバーガーメニュー開け閉じ
$("#hamburger-block").click(function() {
    $("#js-drawer").toggle(300);
    $(".hamburger").toggleClass("active");
});

// // モーダル
// $(function() {
//     $(".modal-open").on("click", function(e) {
//         e.preventDefault();

//         let target = $(this).data("modal");
//         $("#" + target).fadeIn(200).css("display", "flex");
//     });

//     $(".modal-close, .modal-bg").on("click", function(e) {
//         if ($(e.target).is (".modal-bg") || $(this).is (".modal-close")) {
//             $(this).closest(".modal").fadeOut(200);        }
//     });
// });

// モーダル
$(function() {
    $(".modal-open").on("click", function(e) {
      e.preventDefault();
  
      let target = $(this).data("modal");
      // bodyスクロール禁止
      $("body").addClass("modal-open");
  
      // スマホ（768px以下）
      if ($(window).width() <= 768) {
  
        $("#" + target)
          .css({
            "top": 0, // サムネイルの下端
            "left": 0,        // サムネイル左端
            "position": "absolute",
            "display": "flex"
          })
          .fadeIn(200);
  
      // PC（769px以上）
      } else {
        $("#" + target)
          .fadeIn(200)
          .css("display", "flex");
      }
    });
  
    // 閉じる処理
    $(".modal-close, .modal-bg").on("click", function(e) {
      if ($(e.target).is(".modal-bg") || $(this).is(".modal-close")) {
        // bodyスクロール許可
        $("body").removeClass("modal-open");
        $(this).closest(".modal").fadeOut(200);
      }
    });
  });
