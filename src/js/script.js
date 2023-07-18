jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガー
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawerMenu").fadeOut();
      $(this).removeClass("is-open");
      $("body").removeClass("active");
    } else {
      $(".js-drawerMenu").fadeIn();
      $(this).addClass("is-open");
      $("body").addClass("active");
    }
  });

  // ローディングアニメーション
  $(window).on("load", function () {
    // ローカルストレージからロード回数を取得
    var loadCount = localStorage.getItem("loadCount");

    // 初回のロード時の処理
    if (loadCount === null) {
      $(".js-loading").delay(0).fadeIn(900);
      $(".js-loadingTitle").delay(300).fadeIn(800);
      $(".js-loading").delay(1000).fadeOut(900);
      $("body")
        .delay(2000)
        .queue(function (next) {
          $("body").removeClass("fixed");
          next();
        });

      // ローカルストレージにロード回数を保存
      localStorage.setItem("loadCount", 1);
    } else {
      // 2回目以降のロード時の処理
      $(".js-loading").hide();
      $(".js-loadingTitle").hide();
      $("body").removeClass("fixed");
      $(window).scrollTop(0); // スクロール位置をトップに戻す
    }
  });

  // Swiper
  const swiper = new Swiper(".js-mv__slider", {
    loop: true,
    allowTouchMove: false,
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 3000,
    },
  });

  // Swiperカード
  const mySwiperWrapper = document.querySelector(".swiper-wrapper");
  const horizonSlider = new Swiper(".js-campaign__slider", {
    loop: true,
    effect: "slide",
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    slidesPerView: 1.26,
    breakpoints: {
      768: {
        slidesPerView: 3.29,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.49,
        spaceBetween: 40,
      },
    },
    spaceBetween: 24,
    speed: 2000,
    autoplay: {
      delay: 1000,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".slider__nextButton",
      prevEl: ".slider__prevButton",
    },
  });

  // 背景色アニメーション

  // 要素の取得とスピードの設定
  const box = $(".js-slideColor"),
    speed = 600;

  //.js-slideColorの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(".js-slideColor").append('<div class="is-view"></div>');
    const color = $(".js-slideColor").find($(".is-view")),
      image = $(this).find("img");
    let counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter === 0) {
        $(this)
          .delay(300)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  const box2 = $(".js-slideColor2"),
    speed2 = 600;
  //.js-slideColorの付いた全ての要素に対して下記の処理を行う

  box2.each(function () {
    $(".js-slideColor2").append('<div class="is-view2"></div>');
    const color2 = $(".js-slideColor2").find($(".is-view2")),
      image2 = $(this).find("img");
    let counter2 = 0;

    image2.css("opacity", "0");
    color2.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color2.on("inview", function () {
      if (counter2 === 0) {
        $(this)
          .delay(300)
          .animate({ width: "100%" }, speed2, function () {
            image2.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed2);
          });
        counter2 = 1;
      }
    });
  });

  const box3 = $(".js-slideColor3"),
    speed3 = 600;
  //.js-slideColorの付いた全ての要素に対して下記の処理を行う

  box3.each(function () {
    $(".js-slideColor3").append('<div class="is-view3"></div>');
    const color3 = $(".js-slideColor3").find($(".is-view3")),
      image3 = $(this).find("img");
    let counter3 = 0;

    image3.css("opacity", "0");
    color3.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color3.on("inview", function () {
      if (counter3 === 0) {
        $(this)
          .delay(300)
          .animate({ width: "100%" }, speed3, function () {
            image3.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed3);
          });
        counter3 = 1;
      }
    });
  });
});

const box4 = $(".js-slideColor4"),
  speed4 = 600;
//.js-slideColorの付いた全ての要素に対して下記の処理を行う

box4.each(function () {
  $(".js-slideColor4").append('<div class="is-view4"></div>');
  const color4 = $(".js-slideColor4").find($(".is-view4")),
    image4 = $(this).find("img");
  let counter4 = 0;

  image4.css("opacity", "0");
  color4.css("width", "0%");
  //inviewを使って背景色が画面に現れたら処理をする
  color4.on("inview", function () {
    if (counter4 === 0) {
      $(this)
        .delay(300)
        .animate({ width: "100%" }, speed4, function () {
          image4.css("opacity", "1");
          $(this).css({ left: "0", right: "auto" });
          $(this).animate({ width: "0%" }, speed4);
        });
      counter4 = 1;
    }
  });

  // pageTop
  let timer = null;
  const $pageTop = $("#pageTop");
  $pageTop.hide();

  // スクロールイベント
  $(window).on("scroll touchmove", function () {
    // スクロール中か判定
    if (timer !== false) {
      clearTimeout(timer);
    }

    // スクロール量が100pxを超えたら、200ms後にフェードイン
    timer = setTimeout(function () {
      if ($(this).scrollTop() > 100) {
        $("#pageTop").fadeIn("normal");
      } else {
        $pageTop.fadeOut();
      }
    }, 200);

    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const footHeight = parseInt($("#footer").innerHeight());

    if (scrollHeight - scrollPosition <= footHeight - 20) {
      // 現在の下から位置が、フッターの高さの位置にはいったら(bottom20px分を引いて調整)
      $pageTop.css({
        position: "absolute",
        bottom: footHeight,
      });
    } else {
      $pageTop.css({
        position: "fixed",
        bottom: "20px",
      });
    }
  });
});
