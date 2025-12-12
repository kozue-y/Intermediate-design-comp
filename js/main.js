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


// ハンバーガーメニュー開
$("#hamburger-block").click(function() {
  $("#js-drawer").toggleClass("is-open");
  $(".hamburger").toggleClass("active");
});

// 全アンカーリンク（ヘッダー・ドロワー・フッター）
$("a[href^='#']").click(function(e){

  if ($(this).hasClass('skip-scroll')) {
    e.preventDefault();
    return false;
  }
  const speed = 800;
  const href = $(this).attr('href');
  
  // トップへ戻るボタンの場合
  if(href === '#' || href === '') {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, speed, "swing");
    return false;
  }
  // その他ナビゲーションの場合
  e.preventDefault();
  
  const target = $(href);
  if(!target.length) return false;
  
  // header高さ取得
  const headerHeight = $("#header").outerHeight();
  
  // スクロール位置計算
  const scrollPosition = target.offset().top - headerHeight;
  
  // ハンバーガーメニュー閉
  $("#js-drawer").removeClass("is-open");
  $(".hamburger").removeClass("active");
  
  // スムーススクロール
  $("html, body").animate({ 
    scrollTop: scrollPosition 
  }, speed, "swing",function() {
    history.pushState(null,null,href);
  });
  
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




// topへ戻るボタン表示非表示（モーダル）
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



  // AOSふわっと
  AOS.init({
    duration: 1000,
    delay: 100,
    easing: 'ease-out',
    once: true,
  });
