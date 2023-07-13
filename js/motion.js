var ag = setInterval("autoGallery()", 3000);
var slideNum = 1;

function autoGallery() {
  slideNum += 1; // 1 2 (3) 4...5...
  if (slideNum > 3) {
    slideNum = 1;
  }

  jQuery(".visual_controls2 span").text("0" + slideNum);
  jQuery(".visual_slide")
    .stop()
    .animate({ marginLeft: "-100%" }, function () {
      jQuery(".visual_slide li:first").appendTo(".visual_slide");
      jQuery(".visual_slide").css({ marginLeft: 0 });
    });
}

jQuery(function () {
  jQuery(".gnb>li>ul").hide();

  jQuery(".gnb>li:first a").on("mouseover", function () {
    jQuery(".gnb>li>ul").stop().slideDown("fast");
  });

  jQuery(".gnb").on("mouseleave", function () {
    jQuery(".gnb>li>ul").stop().slideUp("fast");
  });

  /*
    jQuery(".gnb>li:first a").mouseover(function(){
        jQuery(".gnb>li>ul").stop().slideDown("fast");
    });

    jQuery(".gnb").mouseleave(function(){
        jQuery(".gnb>li>ul").stop().slideUp("fast");
    });
    */

  //1.visual
  jQuery(".visual_controls1 button:eq(0)").click(function () {
    clearInterval(ag);
    slideNum -= 1;

    if (slideNum < 1) {
      slideNum = 3;
    }

    jQuery(".visual_controls2 span").text("0" + slideNum);
    jQuery(".visual_slide li:last").prependTo(".visual_slide");
    jQuery(".visual_slide").css({ marginLeft: "-100%" });
    jQuery(".visual_slide").stop().animate({ marginLeft: "0" });
  });
  jQuery(
    ".visual_controls1 button:eq(1), .visual_controls2 button:eq(1)"
  ).click(function () {
    clearInterval(ag);
    autoGallery();
  });
  jQuery(".visual_controls2 button:eq(0)").click(function () {
    clearInterval(ag);
  });

  jQuery(".nav_view_btn").click(function () {
    jQuery("nav").stop().animate({ marginRight: 0 });
  });
  jQuery(".nav_close_btn").click(function () {
    jQuery("nav").stop().animate({ marginRight: "-100%" });
  });
});
