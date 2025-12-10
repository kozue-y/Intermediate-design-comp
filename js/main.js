$(".fv_slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2500,
    arrows: false,
    pauseOnHover: false
});

//ヘッダー固定＆色変更

$(function () {
  const $header = $("#header");
  const $fvSection = $(".fv"); 

  function checkScroll() {
    const fvEndPosition = $fvSection.outerHeight(); 
    
    const scroll = $(window).scrollTop();
    
    $header.toggleClass("scrolled", scroll > fvEndPosition);
  }

  $(window).on("scroll resize", checkScroll);
  checkScroll();
});

// ハンバーガーメニュー開け閉じ
$("#hamburger-block").click(function() {
    $("#js-drawer").toggleClass("is-open");
    $(".hamburger").toggleClass("active");
});
// 全アンカーリンク（ヘッダー・ドロワー・フッター）
$("a[href^='#']").click(function(e){
  const href = $(this).attr('href');
// スクロールセクション指定
  if(href === '#' || href === '') return;
  e.preventDefault();
  const target = $(href);
  if(!target.length) return false;

  // // header高さ取得（JSで取得）
  const header = $("#header");
  const headerHeight = header.outerHeight(true);
  // スクロール位置計算・ヘッダーの高さ分引く
  const targetTop = target.offset().top;
  const scrollPosition = targetTop - headerHeight;


  // メニューを閉じる
    $("#js-drawer").removeClass("is-open");
    $(".hamburger").removeClass("active");
  
  //スムーススクロール
  window.scrollTo({
    top:scrollPosition,
    behavior:"smooth"
  }); 
    // URLへハッシュを手動で追記
    setTimeout(() => {
    history.pushState(null, null, href);
  }, 800);
  return false;
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

// $(function () {
//   let scrollPosition = 0; // スクロール位置を記憶する変数

//   $(".modal-open").on("click", function (e) {
//     e.preventDefault();

//     const target = $(this).data("modal");
//     scrollPosition = $(window).scrollTop(); //現在のスクロール位置を記憶
//     // bodyスクロール禁止
//     $("body").addClass("modal-open").css({
//       top: -scrollPosition + 'px'
//     });

//     const $modal = $("#" + target);
//     $modal.css("display", "flex").hide().fadeIn(200);
//   });
//   // 閉じる処理
//   $(".modal-close, .modal-bg").on("click", function(e) {
//     if($(e.target).is(".modal-bg") || $(this).is(".modal-close")) {
//       // body固定解除
//       $("body").removeClass("modal-open").css({
//         top: ''
//       });
//       // 元のスクロール位置に戻す
//       $(window).scrollTop(scrollPosition);
//       $(this).closest(".modal").fadeOut(200);
//     }
//   });
// });




// topへ戻るボタン動作
$(function () {
  const $pageTopLink = $(".page-top-link");
  const $fvSection = $(".fv"); 

  function checkScroll() {
    const fvEndPosition = $fvSection.outerHeight(); 
    
    const scroll = $(window).scrollTop();
    
    $pageTopLink.toggleClass("is-show", scroll > fvEndPosition);
  }

  $(window).on("scroll resize", checkScroll);
  checkScroll();
});

// $('.page-top-link').on('click', function() {
//   $('html, body').animate({ scrollTop: 0 }, 500);
//   return false;
// });


  // AOSふわっと
  AOS.init({
    duration: 1000,
    delay: 100,
    easing: 'ease-out',
    once: true,
  });
